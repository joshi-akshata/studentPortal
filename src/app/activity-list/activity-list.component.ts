import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { File } from '../file';
import { ActivityService } from '../activity.service';
import { FileUploadService } from '../file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activity!: Activity[];
  file!: File[];
  constructor(private activityService :ActivityService,private router:Router,private fileService:FileUploadService) { }

  ngOnInit(): void {

    this.getActivity();
  }
  private getActivity(){
    this.activityService.getActivityList().subscribe(data=>{
      this.activity=data;
    });
  }

updateActivity(id:number){
  this.router.navigate(['/updateactivity',id]);
}

deleteActivity(id:number){
  this.activityService.deleteActivity(id).subscribe(data =>{
    console.log(data);
    this.getActivity();
  })
}
}
