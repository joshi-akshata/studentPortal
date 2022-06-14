import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    alertConfirmation() {
        Swal.fire({
            title: 'Logout',
            text: 'are you sure you want to logout',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'YES',
            cancelButtonText: 'NO'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Logout!',
                    'You have logout successfully',
                    'success'
                )
                this.router.navigate(['/home']);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            }
        })
    }
}
