import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input({ required: true }) show: number = 0;
  close(): void {
    this.show = 0;
  }
}
