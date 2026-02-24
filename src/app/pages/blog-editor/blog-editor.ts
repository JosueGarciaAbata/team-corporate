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
        alert('Por favor selecciona un archivo de imagen válido');
        return;
      }
      
      // Validar tamaño (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen debe ser menor a 5MB');
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
    if (this.blogForm.invalid) {
      Object.keys(this.blogForm.controls).forEach(key => {
        this.blogForm.get(key)?.markAsTouched();
      });
      return;
    }

    // Validar imagen (requerida para nuevos blogs)
    if (!this.isEditMode() && !this.imageFile()) {
      alert('Por favor selecciona una imagen de portada');
      return;
    }

    this.isSaving.set(true);

    try {
      const formValue = this.blogForm.value;
      
      // Convertir imagen a base64 si hay nueva imagen
      let imageUrl = this.imagePreview();
      if (this.imageFile()) {
        imageUrl = await BlogService.convertImageToBase64(this.imageFile()!);
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
      alert('Ocurrió un error al guardar el blog');
    } finally {
      this.isSaving.set(false);
    }
  }

  cancel(): void {
    if (confirm('¿Seguro que deseas cancelar? Los cambios no guardados se perderán.')) {
      this.router.navigate(['/blog']);
    }
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
