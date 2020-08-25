import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../../models/sucursal';
import { Usuario } from '../../../models/usuario';
import { Producto} from '../../../models/producto';
import { ServiceService} from '../../../services/service.service';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
import Swal from 'sweetalert2';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import * as L from 'leaflet';

@Component({
  selector: 'app-sucursal-add',
  templateUrl: './sucursal-add.component.html',
  styleUrls: ['./sucursal-add.component.css']
})
export class SucursalAddComponent implements OnInit {

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
private patternnombres: any ="([a-zA-ZÀ-ÿ\u00f1\u00d1\.][^\s]*)+$";
//private patterncedula : any="[0-9]{7,10}$";
private patterncorreo : any="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
private patterntelefono : any="[0-9]{7,10}$";
//private patterndireccion : any= "([a-zA-ZÀ-ÿ\u00f1\u00d1\.0-9][^\s]*)+$";

  registroForm: FormGroup;
  hide : boolean= true;
  edit :boolean = false;
  sucursalSeleccionado: Sucursal;

  ususucursales: Array<Usuario>;
 
  productos: Array<Producto>;

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
    this.getProductos();
    this.formularioTipo();
    this.initializeMapOptions();
    
    navigator.geolocation.getCurrentPosition(position => {
      this.latIni= position.coords.latitude
      this.longIni = position.coords.latitude
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
    });

  }

  mostarCordenadas() {
    console.log(this.latCli, this.longCli)
  }
  onMapReady(map: Map) {
    this.map = map;
    // this.addSampleMarker();

    var marcador = L.marker([this.latIni, this.longIni], { draggable: true }).addTo(this.map).bindPopup("Marca la ubicacion donde quieres recibir tu pedido")
      .openPopup();
    marcador.on('dragend', (e) => {
      console.log(e.target['_latlng'])
      this.latCli = e.target['_latlng']['lat']
      this.longCli = e.target['_latlng']['lng']

    });

  }

  private initializeMapOptions() {
    this.latIni = -0.1865938
    this.longIni = -78.5709681
    this.mapOptions = {
      center: latLng(this.latIni, this.longIni),
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

   formularioTipo() {
    return this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
     // apellido: new FormControl('', [Validators.required,Validators.pattern(this.patternnombres)]),
      //cedula: new FormControl('', [Validators.required,Validators.pattern(this.patterncedula)]),
      telefono: new FormControl('', [Validators.required,Validators.pattern(this.patterntelefono)]),
     // direccion: new FormControl('', [Validators.required,Validators.pattern(this.patterndireccion)]),
      correo: new FormControl('', [Validators.required,Validators.pattern(this.patterncorreo)]),
      stock: new FormControl('', Validators.required)
   });
}
get nombre() {return this.registroForm.get('nombre'); }
//get apellido() {return this.registroForm.get('apellido'); }
//get cedula() {return this.registroForm.get('cedula'); }
get telefono() {return this.registroForm.get('telefono'); }
//get direccion() {return this.registroForm.get('direccion'); }
get correo() {return this.registroForm.get('correo'); }
get stock() {return this.registroForm.get('stock'); }

}
