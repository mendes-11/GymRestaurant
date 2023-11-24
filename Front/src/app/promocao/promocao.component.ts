import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-promocao',
  standalone: true,
  templateUrl: './promocao.component.html',
  styleUrl: './promocao.component.css',
  imports: [
    CommonModule,
    NavBarComponent,
    FoodCardComponent,
  ],
})
export class PromocaoComponent {


  promocao = [
    { name: 'Tapioca', imageUrl: '../assets/panqueca.jpg', description: 'Descrição da imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/panqueca.jpg', description: 'Descrição da imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/panqueca.jpg', description: 'Descrição da imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/panqueca.jpg', description: 'Descrição da imagem 1', price: 10.99 },
  ];
  

  buyFood(food: any) {
    console.log(`Você comprou: ${food.nome}`);
  }
}
