import { Injectable } from '@angular/core';
import { ClientData } from '../Model/client-data';
import { ProductData } from '../Model/product-data';
import { ApiClientService } from './api-client.service';
import { Observable, concatWith, map } from 'rxjs';
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

  getAll(): Observable<any[]> {
    return this.http.get('product').pipe(
      map((response: any) => response.a)
    )
  }


}
