import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './UserService';
import { User } from '../app/data/User';

@Injectable({
  providedIn: 'root' // Makes the service available throughout the app
})
export class AuthService {
  constructor(private user : UserService,private http: HttpClient){}
  api_url = 'https://localhost:7097';
  private token : string = '';
  public login(email:string,password:string) : string {
    // make request
    this.http.post(`${this.api_url}/auth`, {
      Username: email,
      Password: password,
    },{responseType : 'text'}).subscribe(res => {
        this.token = res;
        // store the token in local storage
        localStorage.setItem("token",this.token);
        // load user data
        this.user.load();
    });
    return this.token;
  }

  public register() {
    
  }

  public logout() {
    // set user service to null
    this.user.curUser.set(null);
    localStorage.removeItem("token");
  }
}