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

  // logeo: Array<Login>;
  // logeos: Login;
  // login: Login;

  logeo : Array<Usuario>;
  logeos: Usuario;
  login : Usuario;

  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.logeos = new Usuario();
    
  }

  loginFuction(){
    this.service.post('/signin',{usuario: this.logeos}).subscribe(
      response => {
        localStorage.setItem("userToken",response['token'])
        this.router.navigate(['/cliente'])
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
