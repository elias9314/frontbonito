import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../models/sucursal';
import { Usuario } from '../../models/usuario';
import { ServiceService} from '../../services/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto} from '../../models/producto';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import * as L from 'leaflet';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {
//Latitud y longitud  de inicio
latIni;
longIni;

//latitud y longitud escogidas por el cliente
latCli
longCli
//
map: Map;
mapOptions: MapOptions;
//

  sucursales: Array<Sucursal>;
  sucursalSeleccionado: Sucursal;
  sucursal: Sucursal;

 
  usuSucursal : Usuario;
 


  producto: Producto;
  constructor(private service: ServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getSucursales();
    this.sucursalSeleccionado = new Sucursal();
    this.sucursales = new Array<Sucursal>();
    this.sucursal = new Sucursal();

    this.getUsuSucursales();
    this.usuSucursal = new Usuario();

    this.getProductos();
    this.producto = new Producto();

    this.initializeMapOptions();
    
      navigator.geolocation.getCurrentPosition(position => {
        this.latIni= position.coords.latitude
        this.longIni = position.coords.latitude
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
      });

  }

  
  mostarCordenadas(){
    console.log(this.latCli,this.longCli)
  }
  onMapReady(map: Map) {
    this.map = map;
   // this.addSampleMarker();
  
  var marcador =  L.marker([this.latIni,this.longIni],{draggable:true}).addTo(this.map).bindPopup("Marca la ubicacion donde quieres recibir tu pedido")
  .openPopup();
    marcador.on('dragend',(e)=>{
      console.log(e.target['_latlng'])
      this.latCli = e.target['_latlng']['lat']
      this.longCli = e.target['_latlng']['lng']
      
   });

 
   
  }



  
  private initializeMapOptions() {
    this.latIni = -0.1865938
    this.longIni=-78.5709681
    this.mapOptions = {
      center: latLng(this.latIni,this.longIni),
      zoom: 14,
      layers: [
        tileLayer(
          'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJtYW5kb3QxOTk4IiwiYSI6ImNrZTY3aTIyMzFhOGgyeXBkNHkzcWlnamEifQ.HL2cLzlPxOGz8ffAhYS2WA',
          {
            
            
            attribution: 'QuitoGas'
          })
      ],
    };
    
   

    
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
     this.producto = response['productos'];
     console.log(this.producto);
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
