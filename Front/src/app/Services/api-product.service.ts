import { Injectable } from '@angular/core';
import { ClientData } from '../Model/client-data';
import { ProductData } from '../Model/product-data';
import { ApiClientService } from './api-client.service';
@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private http: ApiClientService) { }

  register(data: ProductData)
  {
    this.http.post('product/register', data)
      .subscribe(response => console.log(response))
  }
}
