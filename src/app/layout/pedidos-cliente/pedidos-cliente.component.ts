import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-pedidos-cliente',
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.css']
})
export class PedidosClienteComponent implements OnInit {
  infoIdUsuario
  pedidosPendientesCliente;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getinfoClientes()
    setTimeout(() => {
      this.pedidosPendientes()
    }, 500);
    
  }

  getinfoClientes(){
    this.service.infoToken('/profile').subscribe(
      response => {
        this.infoIdUsuario = response[0]
       
      },
      error => {
        console.log('error');
      }
    );
   }

   pedidosPendientes(){
    this.service.get('/UserpedidosPen/'+ this.infoIdUsuario['id_usuario']).subscribe(
      response => {
        this.pedidosPendientesCliente = response['productos']
      console.log(this.pedidosPendientesCliente = response['productos']
      )
      },
      error => {
        console.log('error');
      }
    );
   }
  

}


