import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { GasComponent } from './gas/gas.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [ClienteComponent, GasComponent, PedidoComponent, SucursalComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
