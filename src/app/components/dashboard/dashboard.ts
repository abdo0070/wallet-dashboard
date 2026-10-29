import { Component } from '@angular/core';
import { InvestList } from "../../invest/invest-list/invest-list";
import { InvestmentType } from '../investment-type/investment-type';

@Component({  
  selector: 'app-dashboard',
  imports: [InvestList,InvestmentType],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  
}
