import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../../models/sucursal';
import { Usuario } from '../../../models/usuario';
import { Producto} from '../../../models/producto';
import { ServiceService} from '../../../services/service.service';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursal-add',
  templateUrl: './sucursal-add.component.html',
  styleUrls: ['./sucursal-add.component.css']
})
export class SucursalAddComponent implements OnInit {

  registroForm: FormGroup;
  hide : boolean= true;
  edit :boolean = false;
  sucursalSeleccionado: Sucursal;

  ususucursales: Array<Usuario>;
  usuSucursal : Usuario;
  usuSucursalSeleccionado: Usuario;

  productos: Array<Producto>;
  productoSeleccionado: Producto;
  producto: Producto;

  constructor(private service: ServiceService, private router: Router, private activedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params.id_sucursal){
      this.service.getbyId1(params.id_sucursal).subscribe(
        res=>{
          console.log(res)
        this.sucursalSeleccionado = res['Sucursal'];
          this.edit = true;

        },
        err => console.error(err)
      )
    }
    this.sucursalSeleccionado = new Sucursal;
    this.getUsuSucursales();

    this.usuSucursal = new Usuario();
 

    this.getProductos();


    this.producto = new Producto();
  }
  getUsuSucursales(){
    this.service.get('/UsuSucursales').subscribe(
      response =>{
       this.ususucursales = response['UsuariosSucursales'];
       console.log(this.ususucursales);
      },
      err => console.log(err)
    );
  }
 
  getProductos() {
   this.service.get('/productos').subscribe(
     response => {
      this.productos = response['productos'];
      console.log(this.productos);
     },
     err => console.error(err)
   );
   }

  postSucursal() {
    this.service.post('/sucursal', {'sucursal': this.sucursalSeleccionado}).subscribe(
      response => {
        Swal.fire(
          'Gracias',
          'Registro exitoso',
          'success',  
        );
       this.router.navigate(['/sucursal'])
      },
      error => {
        console.log('error');
      }
    );
   }


   actualizarSucursal(){

    this.service.update2(this.sucursalSeleccionado.id_sucursal,this.sucursalSeleccionado).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/sucursal'])
      },
      error => {
        console.log('error');
      }
    );
   }
}
