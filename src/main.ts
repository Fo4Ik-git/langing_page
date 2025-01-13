import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { Features1Component } from './app/components/features1/features1.component';
import { Features2Component } from './app/components/features2/features2.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { FooterComponent } from "./app/components/footer/footer.component";
import {Features3Component} from "./app/components/features3/features3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    Features1Component,
    Features2Component,
    ContactComponent,
    FooterComponent,
    Features3Component
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-features1 />
      <app-features2 />
      <app-features3/>
      <app-contact />
    </main>
    <app-footer />
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideHttpClient()
  ]
});