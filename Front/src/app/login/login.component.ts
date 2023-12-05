import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ClientServiceService } from '../Services/client-service.service';
import { ClientDataLogin } from '../Model/client-data-login';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
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
          MatToolbarModule
        
        ],
})
export class LoginComponent {

  constructor (private service: ClientServiceService, private router: Router){}

  hide = true;
  cpf = '';
  password = '';

  

  logar() {
    this.service.login(
      {
        CPF: this.cpf,
        Password: this.password,
        Adm: false
      },
      (result: any): void => {
        console.log(result);
        if (result == null) {
          alert("Null!")
        }
        else {
          sessionStorage.setItem('jwt', JSON.stringify(result));
        }
        console.log(result);
        if(result.adm)
          this.router.navigate(['/adm']);
        else
          this.router.navigate(['/cardapio']);
      }
    );
  }
  goToCadastro(){
    this.router.navigate(['/cadastro']);
  }
}