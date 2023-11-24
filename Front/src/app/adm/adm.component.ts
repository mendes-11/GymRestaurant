import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-adm',
  standalone: true,
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css',
  imports: [
    CommonModule,
    NavComponent,
  ],
})
export class AdmComponent {

}
