import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-guest-layout',
  imports: [Header,RouterOutlet],
  templateUrl: './guest-layout.html',
  styleUrl: './guest-layout.css',
})
export class GuestLayout {}
