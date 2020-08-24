import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { GasComponent } from './gas/gas.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClienteSucursalesComponent } from './cliente-sucursales/cliente-sucursales.component';
import { PedidosClienteComponent } from './pedidos-cliente/pedidos-cliente.component';
import { ClientesRealizarPedidosComponent } from './clientes-realizar-pedidos/clientes-realizar-pedidos.component';
import { ClientesPedidosEntregadosComponent } from './clientes-pedidos-entregados/clientes-pedidos-entregados.component';
import { LoginBienvenidaComponent } from './login-bienvenida/login-bienvenida.component';
import { SucursalPendientesComponent } from './sucursal-pendientes/sucursal-pendientes.component';
import { SucursalEntregadosComponent } from './sucursal-entregados/sucursal-entregados.component';
import { ConfirmarEntregaComponent } from './confirmar-entrega/confirmar-entrega.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteAddComponent } from './cliente/cliente-add/cliente-add.component';



@NgModule({
  declarations: [ClienteComponent, GasComponent, PedidoComponent, SucursalComponent,
     SidebarComponent, NavbarComponent,ClienteSucursalesComponent,PedidosClienteComponent,
    ClientesRealizarPedidosComponent,ClientesPedidosEntregadosComponent, LoginBienvenidaComponent, SucursalPendientesComponent, SucursalEntregadosComponent, ConfirmarEntregaComponent, ClienteAddComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,    
  ]
})
export class LayoutModule { }
