import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-entrega',
  templateUrl: './confirmar-entrega.component.html',
  styleUrls: ['./confirmar-entrega.component.css']
})
export class ConfirmarEntregaComponent implements OnInit {

  constructor(private service: ServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  

  confirmarPedido(){
    Swal.fire({
    title: 'Estas seguro de confirmar la entrega?',
    text: 'No podras cambiar el estado de estrega despues!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, quiero confirmar entrega!',
    cancelButtonText: 'No, no deseo continuar'
  }).then((result) => {
    if (result.value) {
      
      this.service.get('/pedidoEst/' + this.route.params['value']['id_pedido'] ).subscribe(
        response => {
          
            Swal.fire(
              'Entrega Confirmada',
              'Tu entrega ha sido confirmada',
              'success'
            )
        this.router.navigate(['/pedidosPendientesSucur'])
        console.log(response);
        },
        error => {
          console.log('error');
        }
      );
      
            
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'No te preocupes',
        'Puedes confirmar la entrega despues',

      )
    }
  })
 }

 volver(){
  this.router.navigate(['/pedidosPendientesSucur'])
}

}


