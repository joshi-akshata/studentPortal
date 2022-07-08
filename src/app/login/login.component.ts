import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import{environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  obj: any
  username: any
  password: any;
  isAdmin: any = false;
  headers:any
  ngOnInit(): void {
  }


  login() {
    let isAdmin: any = document.querySelector('input[name="isAdmin"]:checked');
    if (this.username == "admin" && this.password == "admin") {
      if (isAdmin.value == "Admin") {
        let obj = Object();
        obj["username"] = this.username;
      obj["password"] = this.password;
        localStorage.setItem("isAdmin", isAdmin.value)
        localStorage.setItem("AdminLoginDetails", JSON.stringify(obj))
        this.router.navigate(["/admin"])
      }
      else {
        alert("Please check your user name and password...!")
      }
    }


  
    else {
      let obj = Object();
      obj["username"] = this.username;
      obj["password"] = this.password;
      // this.http.post(environment.mainUrl+"/login", obj,{headers: this.headers})
      this.http.post("http://localhost:8080/login", obj).subscribe(data => {
        console.log("", data)
        if (data) {
          localStorage.setItem("isAdmin", isAdmin.value)
          localStorage.setItem("StudentLoginDetails", JSON.stringify(data))
          this.router.navigate(["/activitypage"])
        }
        else {
          alert("Please check your user name and password...!")
        }
      })
    }

  }
}
