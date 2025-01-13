import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactMessage } from '../../interfaces/contact.interface';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section id="contact" class="bg-black text-white py-10">
      <div class="container mx-auto text-center px-4">
        <p class="font-bold text-xl mb-2">Зв’яжіться з нами</p>
        <p>Ми завжди раді допомогти вам! Якщо у вас є питання або ви хочете дізнатися більше про наші послуги, будь ласка, зв’яжіться з нами за наведеними нижче контактами. Наші фахівці готові надати вам всю необхідну інформацію та підтримку.</p>
      </div>
      <div class="flex flex-col lg:flex-row mt-10">
        <div class="flex-1 p-2 lg:pl-0 hidden lg:block" style="max-width: 600px;">
              <img src="assets/img/contact/image.svg" class="object-contain w-full h-auto" >
        </div>
        <div class="flex-1 flex flex-col justify-center mx-auto">
            <div class="text-center pb-4 pt-4 md:pt-0 ">
              Маєте питання щодо оренди будівельної техніки або потребуєте професійної поради? Заповніть форму нижче, і наші експерти зв’яжуться з вами найближчим часом. Ми допоможемо вам обрати найкраще рішення для вашого проєкту.
            </div>
          <div class="max-w-lg min-w-16 mx-auto">
              <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" class="space-y-6 bg-white2 p-6 rounded-xl text-black
               min-w-96" >
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">Як до вас звертатись*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ваше ім'я"
                    [(ngModel)]="emailData.name"
                    required
                    #name="ngModel"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                    [class.border-red-500]="name.invalid && (name.dirty || name.touched)"
                  />
                  <span class="text-red text-sm" *ngIf="name.invalid && (name.dirty || name.touched)">
                    Ім'я обов'язкове
                  </span>
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700">Номер телефону*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    [(ngModel)]="emailData.phone"
                    required
                    pattern="^\\+?[38]{2}[0-9]{10,12}$"
                    #phone="ngModel"
                    value="+38"
                    (input)="onPhoneInput($event)"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                    [class.border-red-500]="phone.invalid && (phone.dirty || phone.touched)"
                  />
                  <span class="text-red text-sm" *ngIf="phone.invalid && (phone.dirty || phone.touched)">
                    Будь ласка, введіть дійсний номер телефону
                  </span>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700">Коментар</label>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    placeholder="З чим допомогти?"
                    [(ngModel)]="emailData.message"
                    #message="ngModel"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  />
                </div>
                
                <button
                  type="submit"
                  [disabled]="contactForm.invalid || isSubmitting"
                  class="w-full bg-red text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ isSubmitting ? 'Відправляємо...' : 'Надіслати' }}
                </button>
    
                <div *ngIf="submitStatus" class="mt-4 p-4 rounded-lg max-w-lg mx-auto" [ngClass]="submitStatus.success ? ' text-green-700' : 'text-red'">
                  {{ submitStatus.message }}
                </div>
              </form>
            </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  emailData: ContactMessage = {
    name: '',
    phone: '+38',
    message: ''
  };

  isSubmitting = false;
  submitStatus: { success: boolean; message: string } | null = null;

  constructor(private contactService: ContactService) {}

  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.value.startsWith('+38')) {
      input.value = '+38';
    }
    this.emailData.phone = input.value;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    
    this.isSubmitting = true;
    this.submitStatus = null;

    this.contactService.sendContactToTelegram(this.emailData).subscribe({
        next: () => {
            this.submitStatus = {
                success: true,
                message: 'Повідомлення доставленно!'
            };
            form.resetForm();
            this.emailData = { name: '', phone: '', message: '' };
        },
        error: (error) => {
            this.submitStatus = {
                success: false,
                message: 'Вибачте, сталася помилка. Спробуйте ще раз.'
            };
            console.error('Contact sending error:', error);
            setTimeout(() => {
              this.isSubmitting = false;
              this.submitStatus = null;
            }, 3000)
        },
        complete: () => {123
            this.isSubmitting = false;
        }
    });

    // this.emailService.sendEmail(this.emailData).subscribe({
    //   next: () => {
    //     this.submitStatus = {
    //       success: true,
    //       message: 'Повідомлення доставленно!'
    //     };
    //     form.resetForm();
    //     this.emailData = { name: '', phone: '', message: '' };
    //   },
    //   error: (error) => {
    //     this.submitStatus = {
    //       success: false,
    //       message: 'Вибачте, сталася помилка. Спробуйте ще раз.'
    //     };
    //     console.error('Email sending error:', error);
    //   },
    //   complete: () => {
    //     this.isSubmitting = false;
    //   }
    // });
  }
}