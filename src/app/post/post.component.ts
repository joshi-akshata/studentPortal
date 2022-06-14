import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post = new Post();
  id!: number;
  submitted = false;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  constructor(private postService: PostService, private router: Router, private uploadService: FileUploadService) { }


  ngOnInit(): void {
  }

  savePost() {
    this.postService.addPost(this.post).subscribe(data => {
      console.log(data);
      this.goToPostList();
    },
      error => console.log(error));
  }

  goToPostList() {
    this.router.navigate(['/viewPost'])
  }

  onSubmit() {

    console.log(this.post)
    this.upload();
    this.savePost();
  }

  AddPost() {
    this.router.navigate(['/addPost']);
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile)
          .subscribe({
            error: (err: any) => {
              console.log(err);
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
              this.currentFile = undefined;
            }
          });
      }
      this.selectedFiles = undefined;
    }
  }
}
