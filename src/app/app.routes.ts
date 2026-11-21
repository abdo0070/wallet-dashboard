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
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { GuestLayout } from './layout/guest-layout/guest-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthLayout,
    // children: [{ path: 'profile', component: Profile }],
  },
  {
    path: 'home',
    component: GuestLayout,
    children: [
      { path: '', component: Home },
      { path: 'home', redirectTo: '/home', pathMatch: 'full' },
      { path: 'about', loadComponent: () => About },
      { path: 'contact', loadComponent: () => Contact },
    ],
  },
  { path: 'login', loadComponent: () => Login },
  { path: 'register', loadComponent: () => Register },
  { path: '**', component: Notfound },
];
