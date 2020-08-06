import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../models/usuario';
import { ServiceService} from '../../services/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  usuarios: Array<Usuario>;
  usuarioSeleccionado: Usuario;
  usuario: Usuario;

  constructor(private service: ServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.usuarioSeleccionado = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.usuario = new Usuario();
  }

  // tslint:disable-next-line:typedef
  getUsuarios() {
    this.service.get('/users').subscribe(
      response => {
       // tslint:disable-next-line:no-string-literal
       this.usuarios = response['usuarios'];
       console.log(this.usuarios);
      },
      err => console.error(err)
    );
    }

    // tslint:disable-next-line:typedef
    postUsuario() {
      // tslint:disable-next-line:object-literal-key-quotes
      this.service.post('/user', {'usuario': this.usuarioSeleccionado}).subscribe(
        response => {
          this.getUsuarios();
          console.log(response);
        },
        error => {
          console.log('error');
        }
      );
     }

     // tslint:disable-next-line:typedef
     actualizarCliente(usu: Usuario){
      // tslint:disable-next-line:object-literal-key-quotes
      this.service.update('/user', {'usuario': usu}).subscribe(
        response => {
          this.getUsuarios();
          console.log(response);
        },
        error => {
          console.log('error');
        }
      );
     }

     // tslint:disable-next-line:typedef
  agregarCliente(content, usu) {
    if (usu != null) {
      this.usuarioSeleccionado = usu;
    }
    this.modalService.open(content)
      .result
      .then((resultModal => {
        if (resultModal === 'save') {
          if (usu == null) {
            this.postUsuario();
          } else {
            this.actualizarCliente(usu);
          }
        } else {
          this.getUsuarios();
        }
      }), (resultCancel => {
        this.getUsuarios();
      }));
  }
}
