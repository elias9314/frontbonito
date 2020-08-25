import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../services/service.service';
import {Usuario} from '../../../models/usuario';
import { ActivatedRoute,Router} from '@angular/router';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  //usuarioSeleccionado: Usuario;

  private patternnombres: any ="([a-zA-ZÀ-ÿ\u00f1\u00d1\.][^\s]*)+$";
  private patterncedula : any="[0-9]{7,10}$";
  private patterncorreo : any="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  private patterntelefono : any="[0-9]{7,10}$";
  private patterndireccion : any= "([a-zA-ZÀ-ÿ\u00f1\u00d1\.0-9][^\s]*)+$";
  registroForm: FormGroup;
  hide : boolean= true;
  usuarioSeleccionado : Usuario;
  edit :boolean = false;
  constructor(private service: ServiceService, private router: Router, private activedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params.id_usuario){
      this.service.getbyId(params.id_usuario).subscribe(
        res=>{
          console.log(res)
        this.usuarioSeleccionado = res['Usuario'];
          this.edit = true;

        },
        err => console.error(err)
      )
    }
    this.usuarioSeleccionado = new Usuario();
    this.formularioTipo();
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

   formularioTipo() {
    return this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
      apellido: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
      cedula: new FormControl('', [Validators.required,Validators.pattern(this.patterncedula)]),
      telefono: new FormControl('', [Validators.required,Validators.pattern(this.patterntelefono)]),
      direccion: new FormControl('', [Validators.required,Validators.pattern(this.patterndireccion)]),
      correo: new FormControl('', [Validators.required,Validators.pattern(this.patterncorreo)]),
      password: new FormControl('', Validators.required)
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