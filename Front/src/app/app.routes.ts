import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';



export const routes: Routes = [
    {path: '', component: LoginComponent},
    { path: 'home', component: ClienteComponent}
];



/*
TELAS

Cliente:

login
home: Produtos, comprar, carrinho(continuar comprando), quantidade, cupons/ dropdown finalizar pedido.
promoção children da home...


ADM:


*/