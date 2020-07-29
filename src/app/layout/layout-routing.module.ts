import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucursalComponent } from './sucursal/sucursal.component';
import { GasComponent } from './gas/gas.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  {path: 'sucursal', component: SucursalComponent},
  {path: 'gas', component: GasComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'pedido', component: PedidoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
