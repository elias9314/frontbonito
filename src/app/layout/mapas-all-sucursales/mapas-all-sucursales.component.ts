import { Component, OnInit } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import * as L from 'leaflet';
import { GeopositionService } from 'src/app/services/geoposition.service';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-mapas-all-sucursales',
  templateUrl: './mapas-all-sucursales.component.html',
  styleUrls: ['./mapas-all-sucursales.component.css']
})
export class MapasAllSucursalesComponent implements OnInit {
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
  constructor(private geopositionService: GeopositionService,private markerService: MarkerService) { }

  ngOnInit(): void {

    this.initializeMapOptions();

    
   
    
  }

  
  
  mostarCordenadas(){
    console.log(this.latCli,this.longCli)
  }
  onMapReady(map: Map) {
    this.map = map;
   // this.addSampleMarker();

   this.geopositionService.getPosition().then(pos=>
    {
      this.latIni = pos.lat;
      this.longIni= pos.lng;

      this.markerService.sucursalMarkers(this.map);
    

      
    });
  
 
 
   
  }



  
  private initializeMapOptions() {
    this.latIni = -0.223530012693187
    this.longIni= -78.50934631326909
    this.mapOptions = {
      center: latLng(this.latIni,this.longIni),
      zoom: 10,
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
