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
import { NavComponent } from '../nav/nav.component';
import { ClientServiceService } from '../Services/client-service.service';
import { ClientData } from '../Model/client-data';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css',
  imports: [
    CommonModule,
    NavComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule,
    MatIconModule, 
    MatDividerModule, 
    MatInputModule, 
    MatCardModule,
    MatCheckboxModule,
    

  ],
})
export class CadastroClienteComponent {

  constructor (private service: ClientServiceService, private router: Router){} 

  hide = true;
  username = '';
  password: string = '';
  password2 = '';
  adm = '';
  nome: string = '';
  cpf: string = '';
  email: string = '';
  IsAdm = false

  registrar(){
    
    if(this.cpf.length != 11)
    {
      alert("CPF tem que tem 11 caracteres");
      return;
    }

    if(this.password != this.password2)
    {
      alert("senhas devem ser iguais!");
      return;
    }
    console.log(this.adm);
    if(this.adm.length == 4 && this.adm == "0000")
    {
      this.IsAdm = true;

    }

    let client: ClientData = {
      Nome: this.nome,
      Email: this.email,
      CPF: this.cpf,
      Password: this.password,
      isAdm: this.IsAdm
    }

    this.service.register(client);
    this.router.navigate(['/']);
  }
  goToLogin(){
    this.router.navigate(['/'])
  }
}


