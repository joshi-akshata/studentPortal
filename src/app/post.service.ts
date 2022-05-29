import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseURL="http://localhost:8080/post";
  constructor(private httpClient:HttpClient) { }

  getPostList(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.baseURL}`);
  }

  addPost(post:Post): Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/post`,post);
  }

  getPostById(id:number):Observable<Post>{
    return this.httpClient.get<Post>(`http://localhost:8080/post/${id}`);
  }

  updatePost(id:number,post:Post):Observable<Object>{
   return this.httpClient.put(`http://localhost:8080/post/${id}`,post);
  }

  deletePost(id:number):Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/post/${id}`);
   }
}
