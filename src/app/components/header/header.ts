import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mobileOpen = signal(false);

  navLinks = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Services', path: '/services', exact: false },
    { label: 'Projects', path: '/projects', exact: false },
    { label: 'Blog', path: '/blog', exact: false },
    { label: 'Team', path: '/team', exact: false },
  ];

  toggleMobile() {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile() {
    this.mobileOpen.set(false);
  }
}
