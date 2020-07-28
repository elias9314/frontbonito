import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../services/service.service';
import { Usuario} from '../models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuarios: Array<Usuario>;
  usuarioSeleccionado: Usuario;
  usuario: Usuario;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.usuarioSeleccionado = new Usuario();
  }

  // tslint:disable-next-line:typedef
  postUsuario() {
    this.service.post('/users', { usuario: this.usuarioSeleccionado }).subscribe(
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
