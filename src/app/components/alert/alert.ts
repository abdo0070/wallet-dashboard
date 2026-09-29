import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert{
  @Input() show : boolean = false;
  close() : void{
    this.show = false;
  }  
}
