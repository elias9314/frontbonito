import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  get(url: string) {
    return this.http.get(environment.API_URL + url);
  }

  // tslint:disable-next-line:typedef
  post(url: string, data: any) {
    url = environment.API_URL + url;
    return this.http.post(url, data);
  }

  // tslint:disable-next-line:typedef
  update(url: string, data: any) {
    url = environment.API_URL + url;
    return this.http.put(url, data);
  }
}
