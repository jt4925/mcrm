import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,) { }

  getProducts(){
    const uri = environment.api_url + '/api/products';
    return this.http.get<any>(uri);
  }
}
