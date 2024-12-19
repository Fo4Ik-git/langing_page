import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContactMessage } from "../interfaces/contact.interface";
@Injectable({
  providedIn: "root",
})
export class ContactService {

  private URL = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  // sendEmail(emailData: ContactMessage): Observable<any> {
  //   const data = {
  //     service_id: this.serviceId,
  //     template_id: this.templateId,
  //     user_id: this.userId,
  //     template_params: {
  //       from_name: 'Нове повідомлення',
  //       reply_to: this.email,
  //       message: this.messageCompose(emailData),
  //     }
  //   };

  //   return this.http.post(this.apiUrl, data);
  // }

  sendContactToTelegram(emailData: ContactMessage): Observable<any> {
    {
      const url = `${this.URL}/contact`;
      return this.http.post(url, emailData);
    }
  }

}
