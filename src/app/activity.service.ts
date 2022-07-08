import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private BaseURL = "http://localhost:8080/activity";
  constructor(private httpClient: HttpClient) { }

  getActivityList(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(`${this.BaseURL}`);
  }

  addActivity(activity: Activity): Observable<Object> {
    return this.httpClient.post(`${this.BaseURL}`, activity);
  }

  getActivityById(id: number): Observable<Activity> {
    return this.httpClient.get<Activity>(`${this.BaseURL}/${id}`);
  }

  updateActivity(id: number, activity: Activity): Observable<Object> {
    return this.httpClient.put(`${this.BaseURL}/${id}`, activity);
  }

  deleteActivity(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.BaseURL}/${id}`);
  }
}
