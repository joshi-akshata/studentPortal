import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(`http://localhost:8080/notification`);
  }

  getNotificationCount(): Observable<number> {
    return this.httpClient.get<number>(`http://localhost:8080/notification/count`);
  }

  getNotificationById(id: number): Observable<Notification> {
    return this.httpClient.get<Notification>(`http://localhost:8080/notification/${id}`);
  }

  updateNotification(id: number, notification: Notification): Observable<Object> {
    return this.httpClient.put(`http://localhost:8080/notification/${id}`, notification);
  }
}
