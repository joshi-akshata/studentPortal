import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BaseURL = "http://localhost:8080/post";
  
  constructor(private httpClient: HttpClient) { }

  getPostList(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.BaseURL}`);
  }

  addPost(post: Post): Observable<Object> {
    return this.httpClient.post(`${this.BaseURL}`, post);
  }

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.BaseURL}/${id}`);
  }

  updatePost(id: number, post: Post): Observable<Object> {
    return this.httpClient.put(`${this.BaseURL}/${id}`, post);
  }

  deletePost(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.BaseURL}/${id}`);
  }
}
