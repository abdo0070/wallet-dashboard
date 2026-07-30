import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { AuthService } from '../../../services/AuthService';
import { UserService } from '../../../services/UserService';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
})
export class Login {
  constructor(private auth : AuthService){}
  email = "mohamed";
  password = "1233";
  onClickLogin(){
    console.log(this.auth.login(this.email,this.password));
  }
}