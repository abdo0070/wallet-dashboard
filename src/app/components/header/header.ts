import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Profile } from '../profile/profile';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Menu, Profile,RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navLinks: string[] = ['home', 'about', 'contact'];
}
