import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { FeaturesComponent } from './app/components/features/features.component';
import { ContactComponent } from './app/components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    ContactComponent
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-features />
      <app-contact />
    </main>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideHttpClient()
  ]
});