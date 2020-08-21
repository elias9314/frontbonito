import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-clientes-pedidos-entregados',
  templateUrl: './clientes-pedidos-entregados.component.html',
  styleUrls: ['./clientes-pedidos-entregados.component.css']
})
export class ClientesPedidosEntregadosComponent implements OnInit {
  infoIdUsuario
  pedidosEntregadosCliente;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getinfoClientes()
    setTimeout(() => {
      this.pedidosEntregados()
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

   pedidosEntregados(){
    this.service.get('/UserpedidosVen/'+ this.infoIdUsuario['id_usuario']).subscribe(
      response => {
        this.pedidosEntregadosCliente = response['productos']
      console.log(this.pedidosEntregadosCliente = response['productos']
      )
      },
      error => {
        console.log('error');
      }
    );
   }

}
