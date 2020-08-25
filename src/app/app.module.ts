import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import {ServiceService} from './services/service.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
//import { GoogleMapsModule} from '@angular/google-maps';
import { MapaComponent } from './mapa/mapa.component';
import { GeopositionService } from './services/geoposition.service';
import { MarkerService } from './services/marker.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
   // GoogleMapsModule,
    LeafletModule
  ],
  providers: [ServiceService,
    GeopositionService,
    MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
