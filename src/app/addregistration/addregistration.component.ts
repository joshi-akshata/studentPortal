import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

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
 console.log(this.register)
  this.saveRegister();
  }

}
