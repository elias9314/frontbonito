import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../services/service.service';
import { Usuario} from '../models/usuario';
import Swal from 'sweetalert2';
import {Marcador} from '../classes/marcador.class'
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {} from '@angular/google-maps'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 private patternnombres: any ="([a-zA-ZÀ-ÿ\u00f1\u00d1\.][^\s]*)+$";
 private patterncedula : any="[0-9]{7,10}$";
 private patterncorreo : any="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
 private patterntelefono : any="[0-9]{7,10}$";
 private patterndireccion : any= "([a-zA-ZÀ-ÿ\u00f1\u00d1\.0-9][^\s]*)+$";


  hide = true;
  registroForm: FormGroup;

  usuarios: Array<Usuario>;
  usuarioSeleccionado: Usuario;
  usuario: Usuario;
  
  marcadores:  Marcador[] =[];


  constructor(private service: ServiceService,private formBuilder: FormBuilder,  private router : Router) {

   }


  ngOnInit(): void {
    this.usuarioSeleccionado = new Usuario();
    this.formularioTipo();
  }
 
  postUsuario() {
    this.service.post('/user', { usuario: this.usuarioSeleccionado }).subscribe(
      response => {
        
        Swal.fire(
          'Gracias',
          'Registro exitoso',
          'success',  
        );
        this.router.navigate(['/login'])
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
      password: new FormControl('', [Validators.required])
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
