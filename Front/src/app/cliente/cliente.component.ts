import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from '../nav/nav.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {MatCardModule} from '@angular/material/card';
import { FoodCardComponent } from '../food-card/food-card.component';
import { CarouselComponent } from '../carousel/carousel.component';

import { ApiProductService } from '../Services/api-product.service';


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

  // menuItems = [
  //   { name: 'Tapioca', imageUrl: '../assets/tapioca.jpeg', description: 'Descrição da imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagemda imagem 1 imagemda imagemda imagemda imagem 1', price: 10.99 },

  // ];
  

  buyFood(food: any) {
    console.log(`Você comprou: ${food.nome}`);
  }


  menuItems: any;
  promocao: any;
  imageUrl = "../assets/tapioca.jpeg";

  constructor(private service: ApiProductService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (res) => { 
        console.log('Dados recebidos:', res); 
        this.menuItems = res;
        this.promocao = res.filter(item => item.valorPromocional > 0 && item.valorPromocional < item.valor);
        console.log('Dados recebidos:', this.menuItems); 
        console.log('Dados recebidos:', this.promocao); 
        },
      error: (err) => {
        console.error('Erro ao buscar itens:', err);
      }
    });
  }

}
