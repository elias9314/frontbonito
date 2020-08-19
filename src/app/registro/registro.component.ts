import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../services/service.service';
import { Usuario} from '../models/usuario';
import Swal from 'sweetalert2';
import {Marcador} from '../classes/marcador.class'
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

patternnombres ="([a-zA-ZÀ-ÿ\u00f1\u00d1\.][^\s]*)+$";
patterncedula="[0-9]{7,10}$";
patternweb="[a-z0-9._%+-]+[a-z0-9.-]+\.[a-z]{2,4}$";
patterncorreo="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
patterntelefono="[0-9]{7,10}$";
patterndireccion = "([a-zA-ZÀ-ÿ\u00f1\u00d1\.0-9][^\s]*)+$";
patternpassword ="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}";

  registroForm: FormGroup;
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
  constructor(private service: ServiceService,private formBuilder: FormBuilder) {

    //  this.registroForm = this.formBuilder.group({
    //   nombre: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
    //   apellido: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
    //   cedula: new FormControl('', [Validators.required,Validators.pattern(this.patterncedula)]),
    //   telefono: new FormControl('', [Validators.required,Validators.pattern(this.patterntelefono)]),
    //   direccion: new FormControl('', [Validators.required,Validators.pattern(this.patterndireccion)]),
    //   correo: new FormControl('', [Validators.required,Validators.pattern(this.patterncorreo)]),
    //   password: new FormControl('', [Validators.required, Validators.pattern(this.patternpassword)])

    // });

    const nuevoMarcador= new Marcador(-34.681,-34.681)
    this.marcadores.push(nuevoMarcador);
   }

  ngOnInit(): void {
    this.usuarioSeleccionado = new Usuario();
    this.formularioTipo();
  }

 
 
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

  
   formularioTipo() {
     return this.registroForm = new FormGroup({
       nombre: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
       apellido: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
       cedula: new FormControl('', [Validators.required,Validators.pattern(this.patterncedula)]),
       telefono: new FormControl('', [Validators.required,Validators.pattern(this.patterntelefono)]),
       direccion: new FormControl('', [Validators.required,Validators.pattern(this.patterndireccion)]),
       correo: new FormControl('', [Validators.required,Validators.pattern(this.patterncorreo)]),
       password: new FormControl('', [Validators.required, Validators.pattern(this.patternpassword)])
    });
 }
 get nombre() {return this.registroForm.get('nombre'); }
 get apellido() {return this.registroForm.get('apellido'); }
 get cedula() {return this.registroForm.get('cedula'); }
 get telefono() {return this.registroForm.get('telefono'); }
 get direccion() {return this.registroForm.get('direccion'); }
 get correo() {return this.registroForm.get('correo'); }
 get password() {return this.registroForm.get('password'); }
}
