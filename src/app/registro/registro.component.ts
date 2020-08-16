import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../services/service.service';
import { Usuario} from '../models/usuario';
import Swal from 'sweetalert2';
import {Marcador} from '../classes/marcador.class'
import { AgmCoreModule } from '@agm/core';
 
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuarios: Array<Usuario>;
  usuarioSeleccionado: Usuario;
  usuario: Usuario;
  
  marcadores:  Marcador[] =[];


  position = {
    lat: -0.267168,
    lng: -78.541828
  };

  label = {
    color : 'red',
    text: 'marcador'
  };
  constructor(private service: ServiceService) {
    const nuevoMarcador= new Marcador(-34.681,-34.681)
    this.marcadores.push(nuevoMarcador);
   }

  ngOnInit(): void {
    this.usuarioSeleccionado = new Usuario();
  }

  // tslint:disable-next-line:typedef
  postUsuario() {
    this.service.post('/user', { usuario: this.usuarioSeleccionado }).subscribe(
      response => {
        console.log(response);
        Swal.fire(
          'Gracias',
          'Registro exitoso',
          'success'
        );
      },
      error => {
        console.log('error');
      }
    );
  }

  
}
