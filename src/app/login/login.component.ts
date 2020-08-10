import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import {Login} from '../models/login';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeo: Array<Login>;
  logeos: Login;
  login: Login;

  constructor(private service: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.logeos = new Login();
    

  }

  loginFuction(){
    this.service.post('/signin',{login: this.logeos}).subscribe(
      responce => {
        localStorage.setItem("userToken",responce['token'])
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
