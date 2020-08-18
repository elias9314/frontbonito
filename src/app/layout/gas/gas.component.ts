import { Component, OnInit } from '@angular/core';
import { Producto} from '../../models/producto';
import { ServiceService} from '../../services/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {
  productos: Array<Producto>;
  productoSeleccionado: Producto;
  producto: Producto;

  constructor(private service: ServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProductos();
    this.productoSeleccionado = new Producto();
    this.productos = new Array<Producto>();
    this.producto = new Producto();
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

    postProducto() {
      this.service.post('/producto', {'producto': this.productoSeleccionado}).subscribe(
        response => {
          this.getProductos();
          console.log(response);
        },
        error => {
          console.log('error');
        }
      );
     }


     actualizarProducto(pro: Producto){
      this.service.update('/producto', {'producto': pro}).subscribe(
        response => {
          this.getProductos();
          console.log(response);
        },
        error => {
          console.log('error');
        }
      );
     }

  agregarProducto(content, pro) {
    if (pro != null) {
      this.productoSeleccionado = pro;
    }
    this.modalService.open(content)
      .result
      .then((resultModal => {
        if (resultModal === 'save') {
          if (pro == null) {
            this.postProducto();
          } else {
            this.actualizarProducto(pro);
          }
        } else {
          this.getProductos();
        }
      }), (resultCancel => {
        this.getProductos();
      }));
  }

}
