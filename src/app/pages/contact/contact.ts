import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {
    contactForm: FormGroup;
    isSubmitted = false;
    isSending = false;
    sendError = false;

    // EmailJS credentials
    private readonly SERVICE_ID = 'service_9qvkolq';
    private readonly TEMPLATE_ID = 'template_b63hxqb';
    private readonly PUBLIC_KEY = '80ZCF8SDe-rdaB7Ok';

    // WhatsApp
    private readonly WHATSAPP_NUMBER = '593984011952';

    constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', [Validators.required, Validators.minLength(10)]],
            acceptTerms: [false, Validators.requiredTrue]
        });
    }

    ngAfterViewInit(): void {
        this.initAnimations();
    }

    private initAnimations(): void {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo('.contact-info-section h1',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 }
        )
            .fromTo('.contact-info-section p',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                '-=0.4'
            )
            .fromTo('.info-card',
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.15 },
                '-=0.2'
            );

        gsap.fromTo('.contact-form-section',
            { opacity: 0, y: 40, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
        );

        gsap.fromTo('.form-group',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.6 }
        );

        gsap.to('.c-orb-1', { y: -30, x: 20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.c-orb-2', { y: 30, x: -20, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
    }

    onSubmit(): void {
        if (this.contactForm.invalid) {
            Object.keys(this.contactForm.controls).forEach(key => {
                this.contactForm.get(key)?.markAsTouched();
            });
            return;
        }

        this.isSending = true;
        this.sendError = false;
        this.cdr.detectChanges();

        const { name, email, subject, message } = this.contactForm.value;

        const templateParams = {
            name,
            email,
            subject,
            message,
            time: new Date().toLocaleString('es-EC', {
                dateStyle: 'full',
                timeStyle: 'short',
            }),
        };

        emailjs.send(
            this.SERVICE_ID,
            this.TEMPLATE_ID,
            templateParams,
            this.PUBLIC_KEY,
        ).then(
            () => {
                this.isSending = false;
                this.isSubmitted = true;
                this.cdr.detectChanges();

                setTimeout(() => {
                    this.contactForm.reset();
                    this.isSubmitted = false;
                    this.cdr.detectChanges();
                }, 8000);
            },
            (error) => {
                console.error('EmailJS Error:', error);
                this.isSending = false;
                this.sendError = true;
                this.cdr.detectChanges();

                setTimeout(() => {
                    this.sendError = false;
                    this.cdr.detectChanges();
                }, 5000);
            }
        );
    }

    sendWhatsApp(): void {
        if (this.contactForm.invalid) {
            Object.keys(this.contactForm.controls).forEach(key => {
                this.contactForm.get(key)?.markAsTouched();
            });
            return;
        }

        const { name, email, subject, message } = this.contactForm.value;

        const subjectLabels: Record<string, string> = {
            desarrollo: 'Desarrollo a Medida',
            consultoria: 'Consultoría Tech',
            diseno: 'Diseño UI/UX',
            otro: 'Otro',
        };

        const text = [
            `--- STRATIUM | Solicitud de Contacto ---`,
            ``,
            `Nombre: ${name}`,
            `Email: ${email}`,
            `Asunto: ${subjectLabels[subject] || subject}`,
            ``,
            `Mensaje:`,
            `${message}`,
            ``,
            `--- Enviado desde stratium.com ---`,
        ].join('\n');

        const url = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }
}
