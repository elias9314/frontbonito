import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import * as L from 'leaflet';


@Component({
  selector: 'app-ver-ubicacion',
  templateUrl: './ver-ubicacion.component.html',
  styleUrls: ['./ver-ubicacion.component.css']
})
export class VerUbicacionComponent implements OnInit {
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

  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log( this.route.params['value']['lat'])
    console.log( this.route.params['value']['long'])
   
    
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
  
  var marcador =  L.marker([this.route.params['value']['lat'],this.route.params['value']['long']]).addTo(this.map).bindPopup("Aqui debes entregar el pedido")
  .openPopup();
  

 
   
  }



  
  private initializeMapOptions() {
   
    this.mapOptions = {
      center: latLng(this.route.params['value']['lat'],this.route.params['value']['long']),
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

  
}
