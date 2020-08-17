import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../models/sucursal';
import { Usuario } from '../../models/usuario';
import { ServiceService} from '../../services/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto} from '../../models/producto';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  sucursales: Array<Sucursal>;
  sucursalSeleccionado: Sucursal;
  sucursal: Sucursal;

  ususucursales: Array<Usuario>;
  usuSucursal : Usuario;
  usuSucursalSeleccionado: Usuario;

  productos: Array<Producto>;
  productoSeleccionado: Producto;
  producto: Producto;
  constructor(private service: ServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getSucursales();
    this.sucursalSeleccionado = new Sucursal();
    this.sucursales = new Array<Sucursal>();
    this.sucursal = new Sucursal();

    this.getUsuSucursales();
    this.ususucursales = new Array<Usuario>();
    this.usuSucursal = new Usuario();
    this.usuSucursalSeleccionado = new Usuario();
    console.log(this.usuSucursal);

    this.getProductos();
    this.productoSeleccionado = new Producto();
    this.productos = new Array<Producto>();
    this.producto = new Producto();

  }

  getSucursales(){
    this.service.get('/sucursales').subscribe(
      response => {
       this.sucursales = response['sucursales'];
       console.log(this.sucursales);
      },
      err => console.error(err)
    );
  }

 getUsuSucursales(){
   this.service.get('/UsuSucursales').subscribe(
     response =>{
      this.usuSucursal = response['UsuariosSucursales'];
      console.log(this.usuSucursal);
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
        this.getSucursales();
        console.log(response);
      },
      error => {
        console.log('error');
      }
    );
   }

   
   actualizarSucursal(sucu: Usuario){
    this.service.update('/sucursal', {'sucursal': sucu}).subscribe(
      response => {
        this.getSucursales();
        console.log(response);
      },
      error => {
        console.log('error');
      }
    );
   }

agregarSucursal(content, sucu) {
  if (sucu != null) {
    this.sucursalSeleccionado = sucu;
  }
  this.modalService.open(content)
    .result
    .then((resultModal => {
      if (resultModal === 'save') {
        if (sucu == null) {
          this.postSucursal();
        } else {
          this.actualizarSucursal(sucu);
        }
      } else {
        this.getSucursales();
      }
    }), (resultCancel => {
      this.getSucursales();
    }));
}

}
