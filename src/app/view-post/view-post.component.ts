import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post!: Post[];

  list!: any[];
  event: any;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  message1 = "file uploaded";

  constructor(private postService: PostService, private router: Router, private uploadService: FileUploadService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.getPost();
  }
  private getPost() {
    this.postService.getPostList().subscribe(data => {
      this.post = data;
    });
  }

  AddPost() {
    this.router.navigate(['/addPost']);
  }

  updatePost(id: number) {
    this.router.navigate(['/updatePost', id]);
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(data => {
      console.log(data);
      this.getPost();
    })
  }

  addAttachment() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '450px',
      height: '250px'
    });
  }

}
