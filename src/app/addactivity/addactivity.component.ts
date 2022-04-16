import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.css']
})
export class AddactivityComponent implements OnInit {
   activity:Activity=new Activity();
  constructor(private activityService:ActivityService,private router:Router) { }

  ngOnInit(): void {
  }
  saveActivity(){
    this.activityService.addActivity(this.activity).subscribe(data =>{
      console.log(data);
      this.goToActivityList
    },
    error => console.log(error));
  }

  goToActivityList(){
    this.router.navigate(['/activitylist'])
  }

  onSubmit()
  {
 console.log(this.activity)
  this.saveActivity();
  }
}
