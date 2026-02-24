import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogService, Blog as BlogModel } from '../../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);

  blog = signal<BlogModel | undefined>(undefined);
  relatedBlogs = signal<BlogModel[]>([]);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const foundBlog = this.blogService.getBlogById(id);
      
      if (foundBlog) {
        this.blog.set(foundBlog);
        this.loadRelatedBlogs(foundBlog);
      } else {
        this.router.navigate(['/blog']);
      }
    });
  }

  private loadRelatedBlogs(currentBlog: BlogModel): void {
    const allBlogs = this.blogService.getBlogs()();
    const related = allBlogs
      .filter(b => b.id !== currentBlog.id && b.category === currentBlog.category)
      .slice(0, 3);
    this.relatedBlogs.set(related);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  deleteBlog(): void {
    const currentBlog = this.blog();
    if (!currentBlog || currentBlog.isStatic) return;
    
    if (confirm('¿Estás seguro de que deseas eliminar este post?')) {
      this.blogService.deleteBlog(currentBlog.id);
      this.router.navigate(['/blog']);
    }
  }
}
