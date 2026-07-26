import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available throughout the app
})
export class AuthService {
  api_url = 'https://localhost:7097';
  private token : string = '';
  // Constructor must be public (or default) so Angular DI can instantiate it
  constructor(private http: HttpClient) {}

  public login(email:string,password:string) : string {
    // make request
    this.http.post(`${this.api_url}/auth`, {
      Username: email,
      Password: password,
    },{responseType : 'text'}).subscribe(res => {
        this.token = res;
    });
    return this.token;
  }

  public register() {}

  public logout() {}
}