import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../../../services/UserService';
import { Investment } from '../../models/Invsetment';

@Component({
  selector: 'app-invest-list',
  imports: [],
  templateUrl: './invest-list.html',
})
export class InvestList implements OnInit {
    investments = signal<Investment[]>([]);
  constructor(private user : UserService){}
  ngOnInit(): void {
    this.loadInvestmentList();    
  }
  loadInvestmentList(){
      this.user.loadInvestment().subscribe(list => {
        this.investments.set(list);
        console.log(this.investments);
        
      });
  }
}