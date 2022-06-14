import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-addregistration',
  templateUrl: './addregistration.component.html',
  styleUrls: ['./addregistration.component.css']
})
export class AddregistrationComponent implements OnInit {

  register: Register = new Register();
  id!: number;
  submitted = false;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  saveRegister() {
    this.registerService.addRgister(this.register).subscribe(data => {
      console.log(data);
      this.goToRegisterList();
    },
      error => console.log(error));
  }

  goToRegisterList() {
    this.router.navigate(['/registerlist'])
  }

  onSubmit() {
    const substring1 = "@gmail.com";
    const string1 = this.register.password;
    const string2 = this.register.confirmPassword;


    if (this.register.fname == null || this.register.lname == null || this.register.email == null
      || this.register.rollNo == null || this.register.username == null || this.register.password == null ||
      this.register.confirmPassword == null || !(this.register.email.includes(substring1)) ||
      string1 != string2) {
      if (this.register.email == null ? false : !(this.register.email.includes(substring1))) {

        this.simpleAlertBox1();

      }
      else if (string1 != string2) {
        this.simpleAlertBox2();
      }
      else {
        this.simpleAlertBox3();
      }

    }
    else {
      console.log(this.register)
      this.saveRegister();
    }


  }

  simpleAlertBox1() {
    Swal.fire('Oops', 'Invalid Email please check...!', 'error');
  }

  simpleAlertBox2() {
    Swal.fire('Oops', 'Please check Renter Password is should match with password...!', 'error');
  }

  simpleAlertBox3() {
    Swal.fire('Oops', 'Please check the fileds It can not null...!', 'error');
  }


}
