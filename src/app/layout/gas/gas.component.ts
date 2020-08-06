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

  // tslint:disable-next-line:typedef
  getProductos() {
    this.service.get('/productos').subscribe(
      response => {
       // tslint:disable-next-line:no-string-literal
       this.productos = response['productos'];
       console.log(this.productos);
      },
      err => console.error(err)
    );
    }

    // tslint:disable-next-line:typedef
    postProducto() {
      // tslint:disable-next-line:object-literal-key-quotes
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

     // tslint:disable-next-line:typedef
     actualizarProducto(pro: Producto){
      // tslint:disable-next-line:object-literal-key-quotes
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

     // tslint:disable-next-line:typedef
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
