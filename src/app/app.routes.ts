import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './auth/login/login';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    {path : "login" , component:Login},
    {path : "**" ,component:Notfound}
];
