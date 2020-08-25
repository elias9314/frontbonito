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

  constructor(private service: ServiceService, private modalService: NgbModal) { }


  ngOnInit() {

    this.getUsuarios();
    this.usuarioSeleccionado = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.usuario = new Usuario();
  }


  getUsuarios() {
    this.service.get('/users').subscribe(
      response => {
       this.usuarios = response['usuarios'];
      },
      err => console.error(err)
    );
    }

}
