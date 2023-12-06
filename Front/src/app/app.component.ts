import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiProductService } from './Services/api-product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
