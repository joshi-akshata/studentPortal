import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private BaseURL="http://localhost:8080/notification";
  private NotificationCountURL=`${this.BaseURL}/count`;

  constructor(private httpClient: HttpClient) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(`${this.BaseURL}`);
  }

  getNotificationCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.NotificationCountURL}`);
  }

  getNotificationById(id: number): Observable<Notification> {
    return this.httpClient.get<Notification>(`${this.BaseURL}/${id}`);
  }

  updateNotification(id: number, notification: Notification): Observable<Object> {
    return this.httpClient.put(`${this.BaseURL}/${id}`, notification);
  }
}
