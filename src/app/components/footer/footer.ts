import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/services' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Equipo', path: '/team' },
  ];
}
