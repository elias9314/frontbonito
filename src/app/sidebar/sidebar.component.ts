import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Cliente',  icon: 'pe-7s-user', class: '' },
  { path: '', title: 'Gas',  icon: 'pe-7s-note2', class: '' },
  { path: '', title: 'Pedido',  icon: 'pe-7s-note2', class: '' },
  { path: '', title: 'Sucursal',  icon: 'pe-7s-note2', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
