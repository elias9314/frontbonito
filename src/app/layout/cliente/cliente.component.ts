import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../models/usuario';
import { ServiceService} from '../../services/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  usuarios: Array<Usuario>;
  usuarioSeleccionado: Usuario;
  usuario: Usuario;
  private patternnombres: any ="([a-zA-ZÀ-ÿ\u00f1\u00d1\.][^\s]*)+$";
  private patterncedula : any="[0-9]{7,10}$";
  private patterncorreo : any="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  private patterntelefono : any="[0-9]{7,10}$";
  private patterndireccion : any= "([a-zA-ZÀ-ÿ\u00f1\u00d1\.0-9][^\s]*)+$";

  hide : true;
 registroForm: FormGroup;

  constructor(private service: ServiceService, private modalService: NgbModal) { }


  ngOnInit() {

    this.getUsuarios();
    this.usuarioSeleccionado = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.usuario = new Usuario();
    this.formularioTipo();
  }

  formularioTipo() {
    return this.registroForm = new FormGroup({
      nombre_usuario: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
      // apellido: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
      // cedula: new FormControl('', [Validators.required,Validators.pattern(this.patterncedula)]),
      // telefono: new FormControl('', [Validators.required,Validators.pattern(this.patterntelefono)]),
      // direccion: new FormControl('', [Validators.required,Validators.pattern(this.patterndireccion)]),
      // correo: new FormControl('', [Validators.required,Validators.pattern(this.patterncorreo)]),
      // password: new FormControl('', [Validators.required])
   });
}
get nombre_usuario() {return this.registroForm.get('nombre_uuario'); }
// get apellido() {return this.form.get('apellido'); }
// get cedula() {return this.form.get('cedula'); }
// get telefono() {return this.form.get('telefono'); }
// get direccion() {return this.form.get('direccion'); }
// get correo() {return this.form.get('correo'); }
// get password() {return this.form.get('password'); }


  getUsuarios() {
    this.service.get('/users').subscribe(
      response => {
       this.usuarios = response['usuarios'];
      },
      err => console.error(err)
    );
    }

    postUsuario() {
      this.service.post('/user', {'usuario': this.usuarioSeleccionado}).subscribe(
        response => {
          this.getUsuarios();
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
        },
        error => {
          console.log('error');
        }
      );
     }

  agregarCliente(contentCliente, usu) {
    if (usu != null) {
      this.usuarioSeleccionado = usu;
    }
    this.modalService.open(contentCliente)
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
