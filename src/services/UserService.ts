import { Injectable, signal } from "@angular/core";
import { User } from "../app/data/User";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn : 'root'
})
export class UserService
{
    constructor(http : HttpClient) {}
    curUser = signal<User|undefined|null>(null); 
    load(){
        const token : string | null = localStorage.getItem("token");
        // make req to load user data from the API
    }
}