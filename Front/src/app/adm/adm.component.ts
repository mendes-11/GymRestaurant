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

  constructor(private service: ApiProductService) { }

  ngOnInit(): void {
    // this.service.getAll().subscribe(data => {
    //   this.menuItems = data.map(item => ({
    //     name: item.name,
    //     description: item.description,
    //     price: item.Valor,
    //   }));
    //   console.log("Itens do menu com preço:", this.menuItems);

    // }, error => {
    //   console.error("Erro ao receber dados:", error);
    // });
    
    let a = this.service.getAll().subscribe({
      next: (res) => { this.menuItems = res; console.log(this.menuItems) }
    })
  }
  




  buyFood(food: any) {
    console.log(`Você comprou: ${food.nome}`);
  } 
  
  buyClicked()
  {

  }


}
