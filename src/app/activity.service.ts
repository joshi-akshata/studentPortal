import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseURL="http://localhost:8080/activity";
  constructor(private httpClient:HttpClient) { }

  getActivityList(): Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(`${this.baseURL}`);
  }

  addActivity(activity:Activity): Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/activity`,activity);
  }

  getActivityById(id:number):Observable<Activity>{
    return this.httpClient.get<Activity>(`http://localhost:8080/activity/${id}`);
  }

  updateActivity(id:number,activity:Activity):Observable<Object>{
   return this.httpClient.put(`http://localhost:8080/activity/${id}`,activity);
  }

  deleteActivity(id:number):Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/activity/${id}`);
   }
}
