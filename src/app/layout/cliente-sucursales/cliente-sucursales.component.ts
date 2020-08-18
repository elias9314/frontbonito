import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/service.service';


@Component({
  selector: 'app-cliente-sucursales',
  templateUrl: './cliente-sucursales.component.html',
  styleUrls: ['./cliente-sucursales.component.css']
})
export class ClienteSucursalesComponent implements OnInit {

  sucursalesCliente;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getSucrisalesClientes();
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
