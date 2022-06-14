import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-registerlist',
  templateUrl: './registerlist.component.html',
  styleUrls: ['./registerlist.component.css']
})
export class RegisterlistComponent implements OnInit {

  register!: Register[];
  id!: number;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {

    this.getRegister();
  }

  private getRegister() {
    this.registerService.getRegisterList().subscribe(data => {
      this.register = data;
    });
  }

  updateRegister(id: number) {
    this.router.navigate(['/updateregistration', id]);
  }

  deleteRegister(id: number) {
    this.registerService.deleteRegister(id).subscribe(data => {
      console.log(data);
      this.simpleAlertBox();
      this.getRegister();
    })
  }

  simpleAlertBox() {
    Swal.fire('Whooa!', 'Registartion Deleted successfully!', 'success');
  }

}
