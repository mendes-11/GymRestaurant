import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { FoodCardComponent } from '../food-card/food-card.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiProductService } from '../Services/api-product.service';


@Component({
  selector: 'app-adm',
  standalone: true,
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css',
  imports: [
    CommonModule,
    NavComponent,
    NavBarComponent,
    MatCardModule,
    FoodCardComponent,



  ],
})
export class AdmComponent {

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
