import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateregistration',
  templateUrl: './updateregistration.component.html',
  styleUrls: ['./updateregistration.component.css']
})
export class UpdateregistrationComponent implements OnInit {

  register:Register=new Register();
  id!:number;

  constructor(private registerService :RegisterService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.registerService.getRegisterById(this.id).subscribe(data =>{
      this.register=data;
    },
    error =>console.log(error));
  }

  // onSubmit()
  // {
  //   this.registerService.updateRegister(this.id,this.register).subscribe(data =>{
  //   this.goToRegisterList();
  //   }
  //   ,error =>console.log(error));
  // }

  onSubmit()
  {
    const substring1 = "@gmail.com";
    const string1 = this.register.password;
    const string2 = this.register.confirmPassword;


    if(this.register.fname==null || this.register.lname==null ||  this.register.email==null
      || this.register.rollNo==null || this.register.username==null || this.register.password==null || 
      this.register.confirmPassword==null || !(this.register.email.includes(substring1)) ||
      string1!=string2)
    {
      if(this.register.email==null ? false : !(this.register.email.includes(substring1)))
      {
        alert("Invalid Email please check...!")

      }
      else if(string1!=string2)
      {
        alert("Please check Renter Password is should match with password...!")
      }
      else{
        alert("Please check the fileds It can not null...!")
      }
    
   }
   else
   {
    this.registerService.updateRegister(this.id,this.register).subscribe(data =>{
      this.goToRegisterList();
      }
      ,error =>console.log(error));
   }
  
    
  }

  goToRegisterList(){
    this.router.navigate(['/registerlist'])
  }

}
