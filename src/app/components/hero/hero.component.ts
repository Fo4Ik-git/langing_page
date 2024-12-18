import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative pt-24 pb-20 bg-cover bg-center" style="background-image: url('/assets/your-image.jpg');">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="relative container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold text-white mb-6">
        Професійне асфальтування, земельні роботи та оренда спецтехніки
        </h1>
        <p class="text-sm text-white/90 mb-8 max-w-2xl mx-auto">
        Наша компанія пропонує послуги з улаштування асфальтобетонного покриття та оренди спеціалізованої техніки. Ми гарантуємо надійність, швидкість та професіоналізм у кожному проекті. 
      </p>
      </div>
    </section>
  `
})
export class HeroComponent {}