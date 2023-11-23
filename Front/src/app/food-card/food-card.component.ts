import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-card',
  standalone: true,
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css',
  imports: [
    CommonModule,
    FoodCardComponent,
  ],
})
export class FoodCardComponent {
  @Input() food: any; // Objeto de comida fornecido como entrada
  @Output() buyClickedEvent = new EventEmitter<void>();

  buyClicked() {
    this.buyClickedEvent.emit();
  }
}


