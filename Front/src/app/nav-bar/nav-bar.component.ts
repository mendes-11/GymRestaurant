import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor (private router: Router){}
  goToHome(){
    this.router.navigate(['cardapio']);
  }
  goToPromocao(){
    this.router.navigate(['promocao']);
  }
  goToCupom(){
    this.router.navigate(['cupom']);
  }

}
