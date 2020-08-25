import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Pedido } from '../../models/pedido';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import * as L from 'leaflet';


@Component({
  selector: 'app-clientes-realizar-pedidos',
  templateUrl: './clientes-realizar-pedidos.component.html',
  styleUrls: ['./clientes-realizar-pedidos.component.css']
})
export class ClientesRealizarPedidosComponent implements OnInit {
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

  
  pedido = new Pedido();
  infoIdUsuario
  constructor(private service: ServiceService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getinfoClientes()

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

  getinfoClientes(){
    this.service.infoToken('/profile').subscribe(
      response => {
        this.infoIdUsuario = response[0]
      console.log(response[0]['id_usuario']);
      },
      error => {
        console.log('error');
      }
    );
   }

  realizarPedido() {
    Swal.fire({
      title: 'Estas seguro de confirmar el pedido?',
      text: 'No podras eliminar el pedido, una vez lo confirmes!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, quiero confirmar!',
      cancelButtonText: 'No, no deseo continuar'
    }).then((result) => {
      if (result.value) {
       // this.pedido.id_usuario = this.route.params['value']['id_usuario'];
        this.pedido.id_usuario = this.infoIdUsuario['id_usuario'];
        this.pedido.id_sucursal = this.route.params['value']['id_sucursal'];
        this.pedido.id_producto = this.route.params['value']['id_producto'];
        this.pedido.lat = this.latCli
        this.pedido.long =  this.longCli
        this.service.post('/pedido', (this.pedido)).subscribe(
          response => {

            if (response['success']) {

              Swal.fire(
                'Pedido Confirmado',
                'Tu pedido llegara en tu fecha marcada',
                'success'
              )
              
              console.log(response);

              setTimeout(() => {
                 this.router.navigate(['/sucursalesCli'])

              }, 1000);

            }
          },
          error => {
            console.log(error);
          }
        );



        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'No te preocupes',
          'Puedes confirmar el pedido cuando lo desees',

        )
      }
    })


  }
}