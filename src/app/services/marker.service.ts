import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  points: string = 'http://localhost:3000/sucursales';

  constructor(private http: HttpClient) { }

  sucursalMarkers(map: L.Map): void {
    this.http.get(this.points).subscribe((res: any) => {
     console.log()
     
       for (const c of res['sucursales']) {
         const lat = c['lat'];
         const lon = c['long'];
         L.marker([lat, lon]).addTo(map)
         .bindPopup( ` ${ c['nombre_sucursal'] }`)
         .openPopup();
       }
    });
  }
}