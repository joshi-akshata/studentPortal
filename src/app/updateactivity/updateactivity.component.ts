import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateactivity',
  templateUrl: './updateactivity.component.html',
  styleUrls: ['./updateactivity.component.css']
})
export class UpdateactivityComponent implements OnInit {
  activity:Activity=new Activity();
  id!:number
  constructor(private activityService:ActivityService,private router:Router,private route:ActivatedRoute) { }

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
    this.goToActivityList();
    }
    ,error =>console.log(error));
  }
  goToActivityList(){
    this.router.navigate(['/activitylist'])
  }
}
