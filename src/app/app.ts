import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from "./components/dashboard/dashboard";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Login } from "./auth/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, Footer, Header, Login],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('wallet');
}
