import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Editor, Toolbar } from 'ngx-editor';
import { NgxEditorModule } from 'ngx-editor';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-editor',
  imports: [CommonModule, ReactiveFormsModule, NgxEditorModule, RouterLink],
  templateUrl: './blog-editor.html',
  styleUrl: './blog-editor.css'
})
export class BlogEditor implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  blogForm!: FormGroup;
  isEditMode = signal(false);
  editingBlogId = signal<string | null>(null);
  imagePreview = signal<string | null>(null);
  imageFile = signal<File | null>(null);
  isSaving = signal(false);
  showCancelModal = signal(false);
  showSaveModal = signal(false);
  alertMessage = signal<string | null>(null);
  alertType = signal<'error' | 'warning' | 'info'>('info');

  ngOnInit(): void {
    this.editor = new Editor();
    this.initForm();
    
    // Verificar si estamos en modo edición
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode.set(true);
        this.editingBlogId.set(id);
        this.loadBlogForEdit(id);
      }
    });
  }

  private generatePlaceholderImage(): string {
    const colors = [
      ['#b8560f', '#e87d0d'],
      ['#7c3aed', '#a855f7'],
      ['#0ea5e9', '#38bdf8'],
      ['#059669', '#10b981'],
      ['#dc2626', '#ef4444']
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${randomColor[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${randomColor[1]};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#grad)"/>
      </svg>
    `)}`;
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  private initForm(): void {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      excerpt: ['', [Validators.required, Validators.minLength(20)]],
      content: ['', [Validators.required, Validators.minLength(50)]],
      author: ['', [Validators.required]],
      category: ['', [Validators.required]],
      readTime: ['5 min', [Validators.required]]
    });
  }

  private loadBlogForEdit(id: string): void {
    const blog = this.blogService.getBlogById(id);
    if (blog) {
      if (blog.isStatic) {
        alert('No puedes editar blogs estáticos');
        this.router.navigate(['/blog']);
        return;
      }
      
      this.blogForm.patchValue({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        author: blog.author,
        category: blog.category,
        readTime: blog.readTime
      });
      
      this.imagePreview.set(blog.imageUrl);
    } else {
      this.router.navigate(['/blog']);
    }
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Validar tipo de imagen
      if (!file.type.startsWith('image/')) {
        this.showAlert('Por favor selecciona un archivo de imagen válido (JPG, PNG, GIF, WebP)', 'warning');
        input.value = '';
        return;
      }
      
      // Validar tamaño (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.showAlert('La imagen debe ser menor a 5MB. Tu imagen: ' + (file.size / (1024 * 1024)).toFixed(2) + 'MB', 'warning');
        input.value = '';
        return;
      }
      
      this.imageFile.set(file);
      
      // Preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview.set(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(): void {
    this.imageFile.set(null);
    this.imagePreview.set(null);
  }

  async onSubmit(): Promise<void> {
    this.showSaveModal.set(false);
    this.isSaving.set(true);

    try {
      const formValue = this.blogForm.value;
      
      // Convertir imagen a base64 si hay nueva imagen, o usar placeholder
      let imageUrl = this.imagePreview();
      if (this.imageFile()) {
        imageUrl = await BlogService.convertImageToBase64(this.imageFile()!);
      } else if (!imageUrl) {
        // Generar imagen placeholder con gradiente aleatorio
        imageUrl = this.generatePlaceholderImage();
      }

      const blogData = {
        ...formValue,
        imageUrl: imageUrl || ''
      };

      if (this.isEditMode()) {
        this.blogService.updateBlog(this.editingBlogId()!, blogData);
      } else {
        this.blogService.addBlog(blogData);
      }

      this.router.navigate(['/blog']);
    } catch (error) {
      console.error('Error saving blog:', error);
      this.showAlert('Ocurrió un error al guardar el blog. Inténtalo de nuevo.', 'error');
    } finally {
      this.isSaving.set(false);
    }
  }

  cancel(): void {
    this.showCancelModal.set(true);
  }

  confirmCancel(): void {
    this.showCancelModal.set(false);
    this.router.navigate(['/blog']);
  }

  closeCancelModal(): void {
    this.showCancelModal.set(false);
  }

  openSaveModal(): void {
    if (this.blogForm.invalid) {
      Object.keys(this.blogForm.controls).forEach(key => {
        this.blogForm.get(key)?.markAsTouched();
      });
      this.showAlert('Por favor completa todos los campos requeridos', 'warning');
      return;
    }

    this.showSaveModal.set(true);
  }

  closeSaveModal(): void {
    this.showSaveModal.set(false);
  }

  showAlert(message: string, type: 'error' | 'warning' | 'info' = 'info'): void {
    this.alertMessage.set(message);
    this.alertType.set(type);
    setTimeout(() => this.closeAlert(), 5000);
  }

  closeAlert(): void {
    this.alertMessage.set(null);
  }

  getErrorMessage(fieldName: string): string {
    const control = this.blogForm.get(fieldName);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }
    return '';
  }
}
