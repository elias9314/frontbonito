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
import { ConfirmarEntregaComponent } from './confirmar-entrega/confirmar-entrega.component';
<<<<<<< HEAD
import { ClienteAddComponent } from './cliente/cliente-add/cliente-add.component'
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

=======
import {ClienteAddComponent} from './cliente/cliente-add/cliente-add.component'
>>>>>>> 2b891c85c801e9aea9a52a659eba31444d0e5133

@NgModule({
  declarations: [ClienteComponent, GasComponent, PedidoComponent, SucursalComponent,
     SidebarComponent, NavbarComponent,ClienteSucursalesComponent,PedidosClienteComponent,
<<<<<<< HEAD
    ClientesRealizarPedidosComponent,ClientesPedidosEntregadosComponent, LoginBienvenidaComponent, SucursalPendientesComponent, SucursalEntregadosComponent, ConfirmarEntregaComponent,ClienteAddComponent],
=======
    ClientesRealizarPedidosComponent,ClientesPedidosEntregadosComponent, LoginBienvenidaComponent, SucursalPendientesComponent,
     SucursalEntregadosComponent, ConfirmarEntregaComponent, ClienteAddComponent],
>>>>>>> 2b891c85c801e9aea9a52a659eba31444d0e5133
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule
    

    
  ]
})
export class LayoutModule { }
