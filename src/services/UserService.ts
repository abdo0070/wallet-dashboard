import { Injectable, signal } from '@angular/core';
import { User } from '../app/models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './AuthService';
import { Observable } from 'rxjs';
import { Investment } from '../app/models/Invsetment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {}
  curUser = signal<User | undefined | null>(null);
  api_url: string = 'https://localhost:7097';
  load() {}
  loadInvestment(): Observable<Investment[]> {
    // make req to load user data from the API
    const customToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJleHAiOjE3OTExMDQ2MTgsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwOTciLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MDk3In0.tFbmKuPymwLfmew2b0l6RIv0jGgp_P-gIouf6a3sKTE';
    const header = new HttpHeaders({
      Authorization: `Bearer ${customToken}`,
    });
    return this.http.get<Investment[]>(`${this.api_url}/investment`, { headers: header });
  }
  private validToken() {
    // check if the token valid or not before making the req
    // if not valid redirect to login page
  }
  public deleteInvestment(id:number){
    // delete investment 
  }
}
