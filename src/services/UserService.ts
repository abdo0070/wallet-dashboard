import { Injectable, signal } from "@angular/core";
import { User } from "../app/models/User";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./AuthService";
import { Observable } from "rxjs";
import { Investment } from "../app/models/Invsetment";

@Injectable({
    providedIn : 'root'
})
export class UserService
{
    constructor(private http : HttpClient,private auth : AuthService) {}
    curUser = signal<User|undefined|null>(null); 
    api_url : string = "https://localhost:7097"
    load(){

    }
    loadInvestment():Observable<Investment[]>{
        // make req to load user data from the API        
        const header = new HttpHeaders({
            'Authorization':  `Bearer ${localStorage.getItem("token")}`
        });
        return this.http.get<Investment[]>(`${this.api_url}/investment`,{headers:header});
    }
    private validToken(){
        // check if the token valid or not before making the req 
        // if not valid redirect to login page
    }
}