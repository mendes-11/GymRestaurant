import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FoodCardComponent } from '../food-card/food-card.component';
import { ApiProductService } from '../Services/api-product.service';

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
  

  buyFood(food: any) {
    console.log(`Você comprou: ${food.nome}`);
  }
}
