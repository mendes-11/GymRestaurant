import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PromocaoComponent } from './promocao/promocao.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CuponsComponent } from './cupons/cupons.component';
import { AdmComponent } from './adm/adm.component';
import { TotemComponent } from './totem/totem.component';



export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: ClienteComponent },
    { path: 'promocao', component: PromocaoComponent },
    { path: 'cadastro', component: CadastroClienteComponent },
    { path: 'cupom', component: CuponsComponent },
    { path: 'adm', component: AdmComponent },
    { path: 'totem', component: TotemComponent },
];



/*
TELAS

Cliente:

login
home: Produtos, comprar, carrinho(continuar comprando), quantidade, cupons/ dropdown finalizar pedido.
promoção children da home...


ADM:


*/