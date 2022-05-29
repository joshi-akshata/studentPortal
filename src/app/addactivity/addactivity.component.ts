import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.css']
})
export class AddactivityComponent implements OnInit {
   activity:Activity=new Activity();
   id!:number;
   submitted = false;

   selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  constructor(private activityService:ActivityService,private router:Router,private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }
  saveActivity(){
    this.activityService.addActivity(this.activity).subscribe(data =>{
      console.log(data);
      this.goToActivityList();
    },
    error => console.log(error));
  }

  goToActivityList(){
    this.router.navigate(['/activitylist'])
  }

  onSubmit()
  {
    if(this.activity.notice==null)
    {
      alert("Please add Activity Name it should not be null...!")

    }
   else{
      console.log(this.activity)
      this.upload();
      this.saveActivity();
}
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
