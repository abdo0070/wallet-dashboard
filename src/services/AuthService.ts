import { HttpClient } from '@angular/common/http';
import { Injectable, signal, Signal } from '@angular/core';
import { UserService } from './UserService';
import { User } from '../app/models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { API_URL } from '../core/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}
  token = signal<string | null>(localStorage.getItem('token'));
  isAuth = signal<boolean>(false);
  public login(email: string, password: string) : Observable<any> {
    // make request
    return this.http.post(
      `${API_URL}/auth`,
      {
        email: email,
        Password: password,
      },
      { responseType: 'text' },
    );
  }
  public register(user: User) : Observable<any>{
    return this.http
      .post(
        `${API_URL}/auth/register`,
        {
          username: user.balance,
          email: user.email,
          password: user.invest_amount,
        },
        { responseType: 'text' },
      );
      // .subscribe((res) => {
      //   // store the token in local storage
      //   localStorage.setItem('token', res);
      //   this.token.set(res);
      //   this.isAuth.set(true);
      //   // load user data
      //   this.router.navigateByUrl('/');
      // });
  }
  public logout() {
    // set user service to null
    localStorage.removeItem('token');
    this.token.set(null);
    this.isAuth.set(false);
    this.router.navigateByUrl('/login');
  }
  public saveUser(data: any) {
    localStorage.setItem('token', data);
    this.token.set(data);
    this.isAuth.set(true);
    this.router.navigateByUrl('/');
  }
}
