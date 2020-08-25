import { Component, OnInit } from '@angular/core';
import { GeopositionService } from '../services/geoposition.service';
import { MarkerService } from '../services/marker.service';
import * as L from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-shadow.png";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  private map;
  private lat;
  private lng;
  
  constructor(private geopositionService: GeopositionService, private markerService: MarkerService) { 
  }

  ngOnInit(): void {
    this.initMap();
    this.geopositionService.getPosition().then(pos=>
      {
        this.lat = pos.lat;
        this.lng= pos.lng;

        L.marker([this.lat, this.lng]).addTo(this.map);
      });
    this.markerService.sucursalMarkers(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [-0.22908149719911972, -78.51877212524415],
      zoom: 14,
      
    })
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: "QuitoGas",
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYXJtYW5kb3QxOTk4IiwiYSI6ImNrZTY3aTIyMzFhOGgyeXBkNHkzcWlnamEifQ.HL2cLzlPxOGz8ffAhYS2WA'
    });
    tiles.addTo(this.map);  
    this.map.on('click', this.onMapClick);
  }

private onMapClick(e) {
  this.lat = e.latlng.lat;
  this.lng = e.latlng.lng;
  
  console.log(`longitud:`+ this.lng);
  console.log(`Latitud:`+ this.lat);
}

}
