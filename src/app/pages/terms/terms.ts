import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-terms',
  imports: [CommonModule],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    // Hero animations
    gsap.from('.terms-hero-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
    });

    gsap.from('.terms-hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.4,
    });

    // Content animations
    gsap.from('.terms-section', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.terms-content',
        start: 'top 85%',
      },
    });
  }
}
