import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm = new FormGroup (
      {
        username : new FormControl (),
        password : new FormControl ()
      }
    )

    constructor (private route : Router) {

    }
    login() {
      if(this.loginForm.controls.username.value === "admin" && 
      this.loginForm.controls.password.value === "admin") 
      {
         this.route.navigate(['liststudents'])
         alert("login Successful!!")
      }
      else {
        alert("wrong password!!!")
      }
    }

}
