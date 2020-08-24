import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../models/usuario';
import { ServiceService} from '../../services/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  usuarios: Array<Usuario>;
  usuarioSeleccionado: Usuario;
  usuario: Usuario;
  hide : true;
  private patternnombres: any ="([a-zA-ZÀ-ÿ\u00f1\u00d1\.][^\s]*)+$";
  private patterncedula : any="[0-9]{7,10}$";
  private patterncorreo : any="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  private patterntelefono : any="[0-9]{7,10}$";
  private patterndireccion : any= "([a-zA-ZÀ-ÿ\u00f1\u00d1\.0-9][^\s]*)+$";

  usuarioForm: FormGroup;
  constructor(private service: ServiceService, private modalService: NgbModal) { }

  ngOnInit() {

    this.getUsuarios();
    this.formularioTipo();
    this.usuarioSeleccionado = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.usuario = new Usuario();
  }

  formularioTipo() {
    return this.usuarioForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(this.patternnombres)]),
      apellido: new FormControl('', [Validators.required, Validators.pattern(this.patternnombres)]),
      cedula: new FormControl('', [Validators.required, Validators.pattern(this.patterncedula)]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(this.patterntelefono)]),
      correo: new FormControl('', [Validators.required, Validators.pattern(this.patterncorreo)]),
      direccion: new FormControl('', [Validators.required, Validators.pattern(this.patterndireccion)]),    
      password: new FormControl('', [Validators.required])
   });
}

get nombre() {return this.usuarioForm.get('nombre'); }
get apellido() {return this.usuarioForm.get('apellido'); }
get cedula() {return this.usuarioForm.get('cedula'); }
get telefono() {return this.usuarioForm.get('telefono'); }
get direccion() {return this.usuarioForm.get('direccion'); }
get correo() {return this.usuarioForm.get('correo'); }
get password() {return this.usuarioForm.get('password'); }

  getUsuarios() {
    this.service.get('/users').subscribe(
      response => {
       this.usuarios = response['usuarios'];
       console.log(this.usuarios);
      },
      err => console.error(err)
    );
    }

    postUsuario() {
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

     
     actualizarCliente(usu: Usuario){
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
