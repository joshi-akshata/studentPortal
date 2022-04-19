import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activitypage',
  templateUrl: './activitypage.component.html',
  styleUrls: ['./activitypage.component.css']
})
export class ActivitypageComponent implements OnInit {

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

  AddAttachment(){
    this.router.navigate(['/addAttachment']);
  }

}
