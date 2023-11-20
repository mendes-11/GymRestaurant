import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from '../nav/nav.component';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-cliente',
  standalone: true,
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  imports: [
    CommonModule,
    NavComponent,
    MatCardModule,
  ],
})
export class ClienteComponent {

  objetos = [
    { nome: 'Tapioca', imagemSrc: '../assets/tapioca.jpeg', alt: 'Descrição da imagem 1' },
    { nome: 'Outro Objeto', imagemSrc: 'caminho/para/imagem2.jpg', alt: 'Descrição da imagem 2' },
    // Adicione mais objetos conforme necessário
  ];

}
