import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../services/service.service';
import {Usuario} from '../../../models/usuario';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  //usuarioSeleccionado: Usuario;

  hide : true;
  usuarioSeleccionado : Usuario;
  edit :boolean = false;
  constructor(private service: ServiceService, private router: Router, private activedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params.id_usuario){
      this.service.getbyId(params.id_usuario).subscribe(
        res=>{
          console.log(res)
        this.usuarioSeleccionado = res;
          this.edit = true;

        },
        err => console.error(err)
      )
    }
    this.usuarioSeleccionado = new Usuario();
  }

  postUsuario() {
    this.service.post('/user', {'usuario': this.usuarioSeleccionado}).subscribe(
      response => {
       this.router.navigate(['/cliente'])
      },
      error => {
        console.log('error');
      }
    );
   }

   actualizarUsuario(){

    this.service.update1(this.usuarioSeleccionado.id_usuario,this.usuarioSeleccionado).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/cliente'])
      },
      error => {
        console.log('error');
      }
    );
   }
}