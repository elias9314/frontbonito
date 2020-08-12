import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../services/service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private serviceService: ServiceService, private router:Router ){}
 canActivate(){
   if(this.serviceService.gard()){
     //login true
     return true
   }else{
     this.router.navigate(['/home'])
   }
 }
  
}
