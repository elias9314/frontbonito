import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { GasComponent } from './gas/gas.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ClienteSucursalesComponent } from './cliente-sucursales/cliente-sucursales.component';
import { PedidosClienteComponent } from './pedidos-cliente/pedidos-cliente.component';
import { ClientesRealizarPedidosComponent } from './clientes-realizar-pedidos/clientes-realizar-pedidos.component';
import { ClientesPedidosEntregadosComponent } from './clientes-pedidos-entregados/clientes-pedidos-entregados.component';
import { LoginBienvenidaComponent } from './login-bienvenida/login-bienvenida.component'


@NgModule({
  declarations: [ClienteComponent, GasComponent, PedidoComponent, SucursalComponent,
     SidebarComponent, NavbarComponent,ClienteSucursalesComponent,PedidosClienteComponent,
    ClientesRealizarPedidosComponent,ClientesPedidosEntregadosComponent, LoginBienvenidaComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    
  ]
})
export class LayoutModule { }
