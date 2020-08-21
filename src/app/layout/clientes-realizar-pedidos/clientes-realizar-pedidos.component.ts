import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Pedido } from '../../models/pedido';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes-realizar-pedidos',
  templateUrl: './clientes-realizar-pedidos.component.html',
  styleUrls: ['./clientes-realizar-pedidos.component.css']
})
export class ClientesRealizarPedidosComponent implements OnInit {

  pedido = new Pedido();
  infoIdUsuario
  constructor(private service: ServiceService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getinfoClientes()
  }

  getinfoClientes(){
    this.service.infoToken('/profile').subscribe(
      response => {
        this.infoIdUsuario = response[0]
      console.log(response[0]['id_usuario']);
      },
      error => {
        console.log('error');
      }
    );
   }

  realizarPedido() {
    Swal.fire({
      title: 'Estas seguro de confirmar el pedido?',
      text: 'No podras eliminar el pedido, una vez lo confirmes!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, quiero confirmar!',
      cancelButtonText: 'No, no deseo continuar'
    }).then((result) => {
      if (result.value) {
       // this.pedido.id_usuario = this.route.params['value']['id_usuario'];
        this.pedido.id_usuario = this.infoIdUsuario['id_usuario'];
        this.pedido.id_sucursal = this.route.params['value']['id_sucursal'];
        this.pedido.id_producto = this.route.params['value']['id_producto'];
        this.service.post('/pedido', (this.pedido)).subscribe(
          response => {

            if (response['success']) {

              Swal.fire(
                'Pedido Confirmado',
                'Tu pedido llegara en tu fecha marcada',
                'success'
              )
              
              console.log(response);

              setTimeout(() => {
                 this.router.navigate(['/sucursalesCli'])

              }, 1000);

            }
          },
          error => {
            console.log(error);
          }
        );



        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'No te preocupes',
          'Puedes confirmar el pedido cuando lo desees',

        )
      }
    })


  }
}