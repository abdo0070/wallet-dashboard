import { Injectable, signal } from "@angular/core";
import { User } from "../app/data/User";

@Injectable({
    providedIn : 'root'
})
export class UserService
{
    curUser = signal<User|undefined|null>(null); 
}