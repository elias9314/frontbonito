import { Component, OnInit } from '@angular/core';
declare let L;
@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    var map;
    map = L.map('map').setView([-0.2083106220102999, -78.50443840026857] , 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {minZoom: 3, 
	  zoom: 6, 
    attribution: "QuitoGas"
    }).addTo(map);
     
    L.popup()
    .setLatLng([-0.2083106220102999, -78.50443840026857])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);

   
  }


  
  

  

}
