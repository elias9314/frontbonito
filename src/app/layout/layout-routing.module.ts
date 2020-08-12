import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucursalComponent } from './sucursal/sucursal.component';
import { GasComponent } from './gas/gas.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import {AuthGuard} from '../guards/auth.guard'

const routes: Routes = [
  {path: 'sucursal', component: SucursalComponent, canActivate: [AuthGuard]},
  {path: 'gas', component: GasComponent,canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent , canActivate: [AuthGuard]},
  {path: 'pedido', component: PedidoComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
