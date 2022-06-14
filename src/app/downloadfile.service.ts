import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attachment } from './attachment';

@Injectable({
  providedIn: 'root'
})
export class DownloadfileService {

  constructor(private httpClient: HttpClient) { }

  getAttachmentList(): Observable<Attachment[]> {
    return this.httpClient.get<Attachment[]>(`http://localhost:8080/files`);
  }

  getAttachmentById(name: string): Observable<Blob> {
    return this.httpClient.get<Blob>(`http://localhost:8080/files/${name}`);
  }

  deleteFileById(id:number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/files/${id}`);
  }
}
