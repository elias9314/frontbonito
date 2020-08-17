import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../models/sucursal';
import { Usuario } from '../../models/usuario';
import { ServiceService} from '../../services/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  sucursales: Array<Sucursal>;
  sucursalSeleccionado: Sucursal;
  sucursal: Sucursal;

  constructor(private service: ServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getSucursales();
    this.sucursalSeleccionado = new Sucursal();
    this.sucursales = new Array<Sucursal>();
    this.sucursal = new Sucursal();
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
      this.sucursales = response['sucursales'];
      console.log(this.sucursales);
     },
     err => console.log(err)
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
