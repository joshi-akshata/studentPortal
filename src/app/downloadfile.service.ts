import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attachment } from './attachment';

@Injectable({
  providedIn: 'root'
})
export class DownloadfileService {
  private BaseURL="http://localhost:8080/files";

  constructor(private httpClient: HttpClient) { }

  getAttachmentList(): Observable<Attachment[]> {
    return this.httpClient.get<Attachment[]>(`${this.BaseURL}`);
  }

  getAttachmentById(name: string): Observable<Blob> {
    return this.httpClient.get<Blob>(`${this.BaseURL}/${name}`);
  }

  deleteFileById(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.BaseURL}/${id}`);
  }
}
