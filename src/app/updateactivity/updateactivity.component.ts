import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FileUploadService } from 'src/app/file-upload.service';

@Component({
  selector: 'app-updateactivity',
  templateUrl: './updateactivity.component.html',
  styleUrls: ['./updateactivity.component.css']
})
export class UpdateactivityComponent implements OnInit {
  activity:Activity=new Activity();
  id!:number

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  constructor(private activityService:ActivityService,private router:Router,private route:ActivatedRoute,private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.activityService.getActivityById(this.id).subscribe(data =>{
      this.activity=data;
    },
    error =>console.log(error));
  }
  
  onSubmit()
  {
    this.activityService.updateActivity(this.id,this.activity).subscribe(data =>{
    this.upload();
    this.goToActivityList();
    }
    ,error =>console.log(error));
  }
  goToActivityList(){
    this.router.navigate(['/activitylist'])
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
