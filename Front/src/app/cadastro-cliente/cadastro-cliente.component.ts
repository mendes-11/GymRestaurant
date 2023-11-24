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

  hide = true;
  username = '';
  password = '';
  hide2 = true;
  password2 = '';

}
