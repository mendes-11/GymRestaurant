import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiProductService } from '../Services/api-product.service';
import { ProductData } from '../Model/product-data';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ],
})

export class NavComponent {
  constructor(private router: Router, private service: ApiProductService) {}
  name = '';
  descricao = '';
  codProduto = '';
  valor = '';
  promo = '';


  get isAdmPage(): boolean {
    return this.router.url === '/adm';
  }


  abrirModal() {
    document.getElementById('meuModal')!.style.display = 'block';
  }

  fecharModal() {
    document.getElementById('meuModal')!.style.display = 'none';
  }

  cadastrar(){

    let produto: ProductData = {
      
      Nome: this.name,
      Descricao: this.descricao,
      CodProduto: this.codProduto,
      Valor: this.valor,
      ValorPromocional: this.promo,
      
    }
    console.log(this.name);
    console.log(this.descricao);
    console.log(this.codProduto);
    console.log(this.valor);
    console.log(this.promo);

    this.service.register(produto);
    alert("Cadastrado..")

  }

}
