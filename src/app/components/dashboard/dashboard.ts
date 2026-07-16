import { Component } from '@angular/core';
import { InvestList } from "../../invest/invest-list/invest-list";

@Component({  
  selector: 'app-dashboard',
  imports: [InvestList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
