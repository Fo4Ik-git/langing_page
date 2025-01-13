import { Component } from '@angular/core';

@Component({
  selector: 'app-features2',
  standalone: true,
  template: `
    <section id="features2" class="flex justify-center bg-black mt-2 md:mt-0">
      <div class="flex flex-col md:flex-row w-full">
        
        <div class="flex-1 p-2 flex flex-col justify-center items-center ">
          <div class="text-left px-12 text-white">
            <p class="font-bold text-2xl">
              Асфальтні роботи 
            </p>
            <p class="mt-1" style="max-width: 400px;">
              Ми пропонуємо повний спектр послуг з улаштування асфальту, 
              від підготовки основи до фінішного покриття. 
              Наші досвідчені фахівці використовують свою професійність, 
              щоб забезпечити довговічність та якість кожного проекту.
            </p>
            <ul class="list-disc list-inside pl-2 mt-3">
              <li class="text-red font-bold"> 
                <span class="text-white">
                  Улаштування асфальтобетону
                </span>
              </li>
              <li class="text-red font-bold"> 
                <span class="text-white">
                 Ремонт асфальтного покриття ( Ямковий ремонт)
                </span>  
              </li>
              <li class="text-red font-bold"> 
                <span class="text-white">
                 Улаштування майданчиків з сипучих матеріалів ( щебінь, шлак, ШПС...)
                </span> 
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-1 max-w-screen-2xl flex justify-center md:justify-end" style="max-width: 580px;">
          <img src="assets/img/features2/image.svg" class="h-505px md:max-h-full">
        </div>
      </div>
    </section>
  `
})
export class Features2Component {}