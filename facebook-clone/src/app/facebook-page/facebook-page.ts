import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-facebook-page',
  imports: [],
  templateUrl: './facebook-page.html',
  styleUrl: './facebook-page.css',
})
export class FacebookPage {
  readonly year = new Date().getFullYear();

  isMobile = window.innerWidth <= 480;

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth <= 480;
  }

  get emailPlaceholder(): string {
    return this.isMobile
      ? 'Mobile number or email address'
      : 'Email address or mobile number';
  }

  readonly languages: string[] = [
    'English (UK)', 'اردو', 'پښتو', 'العربية', 'हिन्दी', 'বাংলা', 'ਪੰਜਾਬੀ', 'More languages…',
  ];

  readonly links: string[] = [
    'Sign up', 'Log in', 'Messenger', 'Facebook Lite', 'Video', 'Meta Pay',
    'Meta Store', 'Meta Quest', 'Ray-Ban Meta', 'Meta AI', 'Instagram', 'Threads',
    'Privacy Policy', 'About', 'Create Ad', 'Create Page', 'Developers', 'Careers',
    'Cookies', 'AdChoices', 'Terms', 'Help', 'Contact uploading and non-users',
  ];

  onSubmit(event: Event): void {
    event.preventDefault();
  }

  onCreateAccount(): void {}
}