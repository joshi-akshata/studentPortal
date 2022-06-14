import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  post: Post = new Post();
  id!: number;
  submitted = false;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute, private uploadService: FileUploadService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.getPostById(this.id).subscribe(data => {
      this.post = data;
    },
      error => console.log(error));
  }

  onSubmit() {
    this.postService.updatePost(this.id, this.post).subscribe(data => {
      this.upload();
      this.goToPostList();
    }
      , error => console.log(error));

  }
  goToPostList() {
    this.router.navigate(['/viewPost'])
  }

  UpdatePost() {
    this.router.navigate(['/updatePost']);
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
