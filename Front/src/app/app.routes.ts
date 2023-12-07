import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PromocaoComponent } from './promocao/promocao.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CuponsComponent } from './cupons/cupons.component';
import { AdmComponent } from './adm/adm.component';
import { TotemComponent } from './totem/totem.component';
import { UserGuard } from './guard/user.guard';
import { PedidoComponent } from './pedido/pedido.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DashboardComponent } from './dashboard/dashboard.component';



export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cadastro', component: CadastroClienteComponent },
    { path: 'cardapio', component: ClienteComponent },
    { path: 'promocao', component: PromocaoComponent },
    { path: 'cupom', component: CuponsComponent },
    { path: 'adm', component: AdmComponent, canActivate: [UserGuard] },
    { path: 'totem', component: TotemComponent },
    { path: 'pedido', component: PedidoComponent },
    { path: 'carrinho', component: CarrinhoComponent },
    { path: 'dashboard', component: DashboardComponent },
];



/*
TELAS

Cliente:

login
home: Produtos, comprar, carrinho(continuar comprando), quantidade, cupons/ dropdown finalizar pedido.
promoção children da home...


ADM:


*/