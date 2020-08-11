import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import {Login} from '../models/login';
import {Usuario} from '../models/usuario';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeo: Array<Usuario>;
  logeos: Usuario;
  login: Usuario;

  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.logeos = new Usuario();
    
  }

  loginFuction(){
    // delete this.logeos.id_rol,
    // delete this.logeos.id_usuario,
    // delete this.logeos.nombre_usuario,
    // delete this.logeos.apellido_usuario,
    // delete this.logeos.cedula_usuario,
    // delete this.logeos.telefono_usuario,
    // delete this.logeos.direccion_usuario,
   
    console.log(this.logeos)
    this.service.post('/signin',{Login: this.logeos}).subscribe(
      response => {
        if(response['auth'] == true){
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

}
