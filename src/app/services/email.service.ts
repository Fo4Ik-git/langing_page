import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailMessage } from '../interfaces/email.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
  private templateId = 'template_xyz123'; // Replace with your EmailJS template ID
  private userId = 'user_xyz123';         // Replace with your EmailJS user ID
  private serviceId = 'service_xyz123';   // Replace with your EmailJS service ID

  private email = "YOUR_EMAIL";

  constructor(private http: HttpClient) {}

  sendEmail(emailData: EmailMessage): Observable<any> {
    const data = {
      service_id: this.serviceId,
      template_id: this.templateId,
      user_id: this.userId,
      template_params: {
        from_name: 'Нове повідомлення',
        reply_to: this.email,
        message: this.messageCompose(emailData),
      }
    };

    return this.http.post(this.apiUrl, data);
  }

  private messageCompose(emailData: EmailMessage): string {
    return `Ім'я: ${emailData.name}\nТелефон: ${emailData.phone}\nПовідомлення: ${emailData.message}`;
  }
}