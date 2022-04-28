import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-activitypage',
  templateUrl: './activitypage.component.html',
  styleUrls: ['./activitypage.component.css']
})
export class ActivitypageComponent implements OnInit {

  activity!: Activity[];

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  constructor(private activityService :ActivityService,private router:Router,private uploadService: FileUploadService) { }

  ngOnInit(): void {

    this.getActivity();
  }
  private getActivity(){
    this.activityService.getActivityList().subscribe(data=>{
      this.activity=data;
    });
  }

  AddAttachment(){
    this.router.navigate(['/addAttachment']);
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
