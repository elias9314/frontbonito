import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers;
  constructor(private http: HttpClient) { }


  get(url: string) {
    return this.http.get(environment.API_URL + url);
  }
  
  getbyId(id:string){
    return this.http.get(`${environment.API_URL}/user/${id}`);
  }

  update1(id: number, data: any){
    return this.http.put(`${environment.API_URL}/user/${id}`,data);
  }

  post(url: string, data: any) {
    url = environment.API_URL + url;
    return this.http.post(url, data);
  }

 
  update(url: string, data: any) {
    url = environment.API_URL + url;
    return this.http.put(url, data);
  }


  gard(){
    var userToken = localStorage.getItem('userToken');
    console.log(userToken)
    if(userToken == null){
      return false
    }else{
      return true
    }

  }


  infoToken(url: string) {
    this.headers = new HttpHeaders().set('x-access-token',localStorage.getItem('userToken'));
    this.headers.set('Content-Type', 'application/json');
    return this.http.get(environment.API_URL + url, {headers: this.headers});
}





}
