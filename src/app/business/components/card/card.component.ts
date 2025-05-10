import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    totalCash: number = 44000;
    stateNumber: number = 20;
    statePercentage: boolean = true;

    isCollapsed = false;

    toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
