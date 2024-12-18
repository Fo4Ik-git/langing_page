import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section class="flex justify-center bg-pink-100">
      <div class="flex flex-col md:flex-row w-full">
        <div class="flex-1 p-2 relative">
          <img src="assets/img/features1/img.svg" class="w-full" style="max-height: 500px;">
        </div>
        <div class="flex-1 p-2 flex flex-col justify-center items-center ">
          <div class="text-left px-12">
            <p class="font-bold my-2">Познайомтесь з нашою командою професіоналів</p>
            <p>Ми - команда досвідчених фахівців, які завжди готові втілити ваші проєкти в життя. </p>
            <div class="bg-pink-200 rounded-lg py-2 px-4 mt-2 mb-4">
              <p class="font-bold">Наші цінності</p>
              <p>Всього три слова: Якість, Швидкість, Надійність!</p>
            </div>
            <p class="font-bold my-2">Наша історія</p>
            <p>Наша історія
            Колись давно-давно, коли ще ходили динозаври, у 2000 році, з’явилась наша компанія. ЇЇ заснувала одна людина, тернистим та довгим шляхом вона змогла масштабувати потужності фірми до теперішнього рівня, власна техніка, професійні працівники...</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {}