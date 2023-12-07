import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NavComponent } from '../nav/nav.component';
import { ApiProductService } from '../Services/api-product.service';

@Component({
  selector: 'app-totem',
  standalone: true,
  templateUrl: './totem.component.html',
  styleUrl: './totem.component.css',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule,
    MatIconModule, 
    MatDividerModule, 
    MatInputModule, 
    MatCardModule,
    MatCheckboxModule,
    NavComponent,
  ],
})
export class TotemComponent {
  
  cod = "";
  cupom = "";
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
