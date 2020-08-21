import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/service.service';


@Component({
  selector: 'app-cliente-sucursales',
  templateUrl: './cliente-sucursales.component.html',
  styleUrls: ['./cliente-sucursales.component.css']
})
export class ClienteSucursalesComponent implements OnInit {
  infoIdUsuario;
  sucursalesCliente;
  todo
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getSucrisalesClientes();
    this.getinfoClientes();
   
   
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






