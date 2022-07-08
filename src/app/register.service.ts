import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private BaseURL = "http://localhost:8080/student";
  constructor(private httpClient: HttpClient) { }

  getRegisterList(): Observable<Register[]> {
    return this.httpClient.get<Register[]>(`${this.BaseURL}`);
  }

  addRgister(register: Register): Observable<Object> {
    return this.httpClient.post(`${this.BaseURL}`, register);
  }

  getRegisterById(id: number): Observable<Register> {
    return this.httpClient.get<Register>(`${this.BaseURL}/${id}`);
  }

  updateRegister(id: number, register: Register): Observable<Object> {
    return this.httpClient.put(`${this.BaseURL}/${id}`, register);
  }

  deleteRegister(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.BaseURL}/${id}`);
  }
}
