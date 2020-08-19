import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/service.service';


@Component({
  selector: 'app-sucursal-entregados',
  templateUrl: './sucursal-entregados.component.html',
  styleUrls: ['./sucursal-entregados.component.css']
})
export class SucursalEntregadosComponent implements OnInit {
  sucursalesCliente;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getSucrisalesClientes()
  }

  getSucrisalesClientes(){
    this.service.get('/sucursales').subscribe(
      response => {
        this.sucursalesCliente = response['sucursales'];
       console.log(response['sucursales']);
      },
      error => {
        console.log('error');
      }
    );
   }

}
