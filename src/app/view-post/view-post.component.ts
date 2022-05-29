import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post!: Post[];

  list!: any[];
  event:any;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  message1="file uploaded";

  constructor(private postService :PostService,private router:Router,private uploadService: FileUploadService) { }

  ngOnInit(): void {

    this.getPost();
  }
  private getPost(){
    this.postService.getPostList().subscribe(data=>{
      this.post=data;
    });
  }

  AddPost(){
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
      this.displayFile();
    }
  }

  displayFile()
  {
      alert("file uploaded succesfully....!")
  }
  
  updatePost(id:number){
    this.router.navigate(['/updatePost',id]);
  }
  
  deletePost(id:number){
    this.postService.deletePost(id).subscribe(data =>{
      console.log(data);
      this.getPost();
    })
  }

}
