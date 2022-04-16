import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activity!: Activity[];
  constructor(private activityService :ActivityService,private router:Router) { }

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
