import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { AuthService } from '../../../services/AuthService';
import { UserService } from '../../../services/UserService';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
})
export class Login {
  constructor(private auth : AuthService,private user : UserService){}
  email = "mohamed";
  password = "1233";
  rememberMe = null;
  onClickLogin(form: NgForm) {
    /**
     * 1.validate email & password 
     * 2.send the req
     * 3.if success save the token 
     * 4.redirect to dashboard
     */
    if (form.invalid) {
      form.control.markAllAsTouched();
      console.log("ERRORRR");
      return;
    }
      const { email, password } = form.value;
      this.auth.login(email,password);
      // Call auth service
  }
}