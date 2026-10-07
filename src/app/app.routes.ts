import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './auth/login/login';
import { Notfound } from './components/notfound/notfound';
import { AuthGuard } from '../services/AuthGuard';
import { Profile } from './components/profile/profile';
import { Home } from './components/home/home';
import { Register } from './auth/register/register';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard, canActivate: [] },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
  { path: 'about', loadComponent: () => About },
  { path: 'contact', loadComponent: () => Contact },
  { path: '**', component: Notfound },
];
