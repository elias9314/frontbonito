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
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { GoogleMapsModule} from '@angular/google-maps'
<<<<<<< HEAD
import { AgmCoreModule } from '@agm/core';


=======
>>>>>>> 6f67095878ec33877a64cc355d67ea36f328aa70
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
