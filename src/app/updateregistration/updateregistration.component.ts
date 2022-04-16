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

  onSubmit()
  {
    this.registerService.updateRegister(this.id,this.register).subscribe(data =>{
    this.goToRegisterList();
    }
    ,error =>console.log(error));
  }
  goToRegisterList(){
    this.router.navigate(['/registerlist'])
  }

}
