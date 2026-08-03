import {
  CanActivate,
  Router,
} from '@angular/router';
import { AuthService } from './AuthService';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuth() == true) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
