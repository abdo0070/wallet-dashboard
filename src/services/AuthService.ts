import { HttpClient } from '@angular/common/http';
import { Injectable, signal, Signal } from '@angular/core';
import { UserService } from './UserService';
import { User } from '../app/models/User';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}
  api_url = 'https://localhost:7097';
  token = signal<string | null>(localStorage.getItem('token'));
  isAuth = signal<boolean>(false);
  public login(email: string, password: string) {
    // make request
    this.http
      .post(
        `${this.api_url}/auth`,
        {
          email: email,
          Password: password,
        },
        { responseType: 'text' },
      )
      .subscribe((res) => {
        // store the token in local storage
        localStorage.setItem('token', res);
        this.token.set(res);
        this.isAuth.set(true);
        // load user data
        this.router.navigateByUrl('/');
      });
  }
  public register(user: User) {
    this.http
      .post(
        `${this.api_url}/auth/register`,
        {
          username: user.balance,
          email: user.email,
          password: user.invest_amount,
        },
        { responseType: 'text' },
      )
      .subscribe((res) => {
        // store the token in local storage
        localStorage.setItem('token', res);
        this.token.set(res);
        this.isAuth.set(true);
        // load user data
        this.router.navigateByUrl('/');
      });
  }
  public logout() {
    // set user service to null
    localStorage.removeItem('token');
    this.token.set(null);
    this.isAuth.set(false);
    this.router.navigateByUrl('/login');
  }
}
