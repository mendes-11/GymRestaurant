import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-cupons',
  standalone: true,
  templateUrl: './cupons.component.html',
  styleUrl: './cupons.component.css',
  imports: [
    CommonModule,
    NavBarComponent,
    FoodCardComponent,
  ],
})
export class CuponsComponent {

  cupons = [
    { name: "GYM10", description: "Da 10 reais de desconto na compra acima de 30 reais"},
    { name: "GYM20", description: "Da 20 reais de desconto na compra acima de 50 reais"},
    { name: "GYM40", description: "Da 40 reais de desconto na compra acima de 90 reais"},
    { name: "GYM40", description: "Da 40 reais de desconto na compra acima de 90 reais"},

    { name: "GYM40", description: "Da 40 reais de desconto na compra acima de 90 reais"},

  ]

  getCoupon(food: any) {
    console.log(`Você comprou: ${food.nome}`);
  }

}
