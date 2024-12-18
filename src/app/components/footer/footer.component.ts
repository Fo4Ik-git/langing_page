import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-black text-white py-4">
      <div class="container mx-auto flex flex-col md:flex-row justify-end items-center">
        <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <div class="flex items-center space-x-2 bg-white rounded-xl text-black px-3 py-2">
            <span>&bull;</span><a href="tel:+1234567890" class="hover:underline">+1 (234) 567-890</a>
          </div>
          <div class="flex items-center space-x-2 bg-white rounded-xl text-black px-3 py-2">
            <span>&bull;</span><span>м. Дніпро, вул. Прикладна, 10</span>
          </div>
          <div class="flex items-center space-x-2 bg-white rounded-xl text-black px-3 py-2">
            <span>&bull;</span><a href="mailto:info@example.com" class="hover:underline">info&#64;example.com</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
