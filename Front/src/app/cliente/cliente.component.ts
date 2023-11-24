import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from '../nav/nav.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {MatCardModule} from '@angular/material/card';
import { FoodCardComponent } from '../food-card/food-card.component';
import { CarouselComponent } from '../carousel/carousel.component';


@Component({
  selector: 'app-cliente',
  standalone: true,
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  imports: [
    CommonModule,
    NavComponent,
    MatCardModule,
    NavBarComponent,
    FoodCardComponent,
    CarouselComponent
  ],
})
export class ClienteComponent {

  menuItems = [
    { name: 'Tapioca', imageUrl: '../assets/tapioca.jpeg', description: 'Descrição da imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagem 1 imagemda imagemda imagemda imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/tapioca.jpeg', description: 'Descrição da imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagem 1 imagemda imagemda imagemda imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/tapioca.jpeg', description: 'Descrição da imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagem 1 imagemda imagemda imagemda imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/tapioca.jpeg', description: 'Descrição da imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagem 1 imagemda imagemda imagemda imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/tapioca.jpeg', description: 'Descrição da imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagem 1 imagemda imagemda imagemda imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/tapioca.jpeg', description: 'Descrição da imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagem 1 imagemda imagemda imagemda imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/tapioca.jpeg', description: 'Descrição da imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagem 1 imagemda imagemda imagemda imagem 1', price: 10.99 },
    { name: 'Tapioca', imageUrl: '../assets/tapioca.jpeg', description: 'Descrição da imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagem 1 imagemda imagemda imagemda imagem 1', price: 10.99 },

  ];
  

  buyFood(food: any) {
    console.log(`Você comprou: ${food.nome}`);
  }

}
