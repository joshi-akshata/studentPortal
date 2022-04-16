import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL="http://localhost:8080/student";
  constructor(private httpClient:HttpClient) { }

  getRegisterList(): Observable<Register[]>{
    return this.httpClient.get<Register[]>(`${this.baseURL}`);
  }

  addRgister(register:Register): Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/student`,register);
  }

  getRegisterById(id:number):Observable<Register>{
    return this.httpClient.get<Register>(`http://localhost:8080/student/${id}`);
  }

  updateRegister(id:number,register:Register):Observable<Object>{
   return this.httpClient.put(`http://localhost:8080/student/${id}`,register);
  }

  deleteRegister(id:number):Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/student/${id}`);
   }
}
