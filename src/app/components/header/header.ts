import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { Profile } from "../profile/profile";

@Component({
  selector: 'app-header',
  imports: [Menu, Profile],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
