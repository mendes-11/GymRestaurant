import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from '../nav/nav.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
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
    NavBarComponent,
  ],
})
export class ClienteComponent {

  objetos = [
    { nome: 'Tapioca', imagemSrc: '../assets/tapioca.jpeg', alt: 'Descrição da imagem 1' },
    { nome: 'Tapioca', imagemSrc: '../assets/tapioca.jpeg', alt: 'Descrição da imagem 1' },
    { nome: 'Tapioca', imagemSrc: '../assets/tapioca.jpeg', alt: 'Descrição da imagem 1' },
    { nome: 'Tapioca', imagemSrc: '../assets/tapioca.jpeg', alt: 'Descrição da imagem 1' },
    { nome: 'Tapioca', imagemSrc: '../assets/tapioca.jpeg', alt: 'Descrição da imagem 1' },

    { nome: 'Tapioca', imagemSrc: '../assets/tapioca.jpeg', alt: 'Descrição da imagem 1' },
    { nome: 'Tapioca', imagemSrc: '../assets/tapioca.jpeg', alt: 'Descrição da imagem 1' },



    // Adicione mais objetos conforme necessário
  ];

}
