import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-addregistration',
  templateUrl: './addregistration.component.html',
  styleUrls: ['./addregistration.component.css']
})
export class AddregistrationComponent implements OnInit {

  register:Register=new Register();
  id!:number;
  submitted = false;

  constructor(private registerService :RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  saveRegister(){
    this.registerService.addRgister(this.register).subscribe(data =>{
      console.log(data);
      this.goToRegisterList();
    },
    error => console.log(error));
  }

  goToRegisterList(){
    this.router.navigate(['/registerlist'])
  }

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
    console.log(this.register)
    this.saveRegister();
   }
  
    
  }

  

}
