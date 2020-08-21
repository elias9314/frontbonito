import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sucursal-pendientes',
  templateUrl: './sucursal-pendientes.component.html',
  styleUrls: ['./sucursal-pendientes.component.css']
})
export class SucursalPendientesComponent implements OnInit {

  infoIdUsuario;
  infoIdSucursal;
  PedidosPendientesSucursal;
  constructor(private service: ServiceService,private router: Router) { }

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
    this.service.get('/pedidosUserPen/' + this.infoIdSucursal['id_sucursal']).subscribe(
      response => {
        this.PedidosPendientesSucursal = response['productos']
      console.log(response);
      },
      error => {
        console.log('error');
      }
    );
   }



  

 


}
