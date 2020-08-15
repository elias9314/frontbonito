import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../models/usuario';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}


export const ROUTES: RouteInfo[] = [
  { path: '/cliente', title: 'Cliente',  icon: 'fa fa-user-circle-o', class: '' },
  { path: '/gas', title: 'Gas',  icon: 'fa fa-file-text', class: '' },
  { path: '/pedido', title: 'Pedido',  icon: 'fa fa-file-text', class: '' },
  { path: '/sucursal', title: 'Sucursal',  icon: 'fa fa-users', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuario : Usuario;
  menuItems: any[];

  constructor() { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
