import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucursalComponent } from './sucursal/sucursal.component';
import { GasComponent } from './gas/gas.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import {AuthGuard} from '../guards/auth.guard'
import { ClienteSucursalesComponent } from './cliente-sucursales/cliente-sucursales.component';
import { PedidosClienteComponent } from './pedidos-cliente/pedidos-cliente.component';
import { ClientesRealizarPedidosComponent } from './clientes-realizar-pedidos/clientes-realizar-pedidos.component';
import { ClientesPedidosEntregadosComponent } from './clientes-pedidos-entregados/clientes-pedidos-entregados.component'
import { LoginBienvenidaComponent } from './login-bienvenida/login-bienvenida.component'
import { SucursalPendientesComponent } from './sucursal-pendientes/sucursal-pendientes.component'
import { SucursalEntregadosComponent } from './sucursal-entregados/sucursal-entregados.component'

const routes: Routes = [
  {path: 'sucursal', component: SucursalComponent, canActivate: [AuthGuard]},
  {path: 'gas', component: GasComponent,canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent , canActivate: [AuthGuard]},
  {path: 'pedido', component: PedidoComponent,canActivate: [AuthGuard]},
  {path: 'sucursalesCli', component: ClienteSucursalesComponent,canActivate: [AuthGuard]},
  {path: 'realizarPedidosCli/:id_usuario/:id_sucursal/:id_producto', component: ClientesRealizarPedidosComponent,canActivate: [AuthGuard]},
  {path: 'pendientesCli', component: PedidosClienteComponent,canActivate: [AuthGuard]},
  {path: 'pedidosCli', component: ClientesPedidosEntregadosComponent,canActivate: [AuthGuard]},
  {path: 'homeLogin', component: LoginBienvenidaComponent,canActivate: [AuthGuard]},
  {path: 'pedidosPendientesSucur', component: SucursalPendientesComponent,canActivate: [AuthGuard]},
  {path: 'pedidosEntegadosSucur', component: SucursalEntregadosComponent,canActivate: [AuthGuard]},  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
