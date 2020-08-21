import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/service.service';


@Component({
  selector: 'app-sucursal-entregados',
  templateUrl: './sucursal-entregados.component.html',
  styleUrls: ['./sucursal-entregados.component.css']
})
export class SucursalEntregadosComponent implements OnInit {
  infoIdUsuario;
  infoIdSucursal;
  PedidosEntregadosSucursal;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getSucrisalesClientes()
    
    setTimeout(() => {
      this.getIdSucursal();
    }, 200);

    setTimeout(() => {
      this.getPedidosPendientesSucursal();
    }, 500);
  }

  
  getSucrisalesClientes(){
    this.service.infoToken('/profile').subscribe(
      response => {
        this.infoIdUsuario = response[0]
      // console.log(response[0]);
      },
      error => {
        console.log('error');
      }
    );
   }


   getIdSucursal(){
    this.service.get('/infoSucursal/' + this.infoIdUsuario['id_usuario']).subscribe(
      response => {
        this.infoIdSucursal =  response[0];
     //  console.log(response[0]);
      },
      error => {
        console.log('error');
      }
    );
   }

   getPedidosPendientesSucursal(){
    this.service.get('/pedidosUserVen/' + this.infoIdSucursal['id_sucursal']).subscribe(
      response => {
        this.PedidosEntregadosSucursal = response['productos']
        console.log(response);
      },
      error => {
        console.log('error');
      }
    );
   }

}
