import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import {Login} from '../models/login';
import {Usuario} from '../models/usuario';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeo: Array<Usuario>;
  logeos: Usuario;
  login: Usuario;
  hide = true;

  loginForm: FormGroup;

  constructor(private service: ServiceService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     correo: ['', Validators.required],
  //     password: ['', Validators.required]
  // });

this.formularioTipo();
    this.logeos = new Usuario();
    
  }

  loginFuction(){
     delete this.logeos.id_rol,
     delete this.logeos.id_usuario,
     delete this.logeos.nombre_usuario,
     delete this.logeos.apellido_usuario,
     delete this.logeos.cedula_usuario,
     delete this.logeos.telefono_usuario,
     delete this.logeos.direccion_usuario,
   
   
    this.service.post('/signin',{Login: this.logeos}).subscribe(
      response => {
        if(response['auth'] == true){
          var rol =response['Login'][0]["id_rol"]
          localStorage.setItem("rol",rol)
          localStorage.setItem("userToken",response['token'])
          this.router.navigate(['/cliente'])
        }else{
          Swal.fire(
            'Halgo ha salido mal!',
            'Intenta nuevamente',
            'error'
          );
        }
        
        },
        error => {
          Swal.fire(
            'Halgo ha salido mal!',
            'Intenta nuevamente',
            'error'
          );
        }
    )
  }


   formularioTipo() {
     return this.loginForm = new FormGroup({
         correo: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^([A-Za-z])*$')]),
         password: new FormControl('', [Validators.required]),

     });
 }
 get correo() {return this.loginForm.get('correo'); }
 get password() {return this.loginForm.get('password'); }


}
