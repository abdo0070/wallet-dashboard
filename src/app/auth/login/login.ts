import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import AuthService from '../../../services/AuthService';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
})
export class Login {
  auth : AuthService = new AuthService();

  email = "";
  password = "";
  onClickLogin(){
    this.auth.login();
  }
}