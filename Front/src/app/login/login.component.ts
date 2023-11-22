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
          NavComponent,
        ],
})
export class LoginComponent {

  hide = true;
  username = '';
  password = '';

}