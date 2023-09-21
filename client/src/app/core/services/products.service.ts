import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private apiService: ApiService
  ) { }

  set(data:{}): Observable<Product[]> {
    return this.apiService.set('http://localhost:3000/products', data)
  }

  get(): Observable<Product[]> {
    return this.apiService.get('http://localhost:3000/products')
  }

  getById(id: string): Observable<Product> {
    return this.apiService.getById('http://localhost:3000/product', id)
  }

  deleteProduct(id:string): Observable<any> {
    return this.apiService.deleteById('http://localhost:3000/product',id)
  }

  deleteProducts(): Observable<any> {
    return this.apiService.deleteAll('http://localhost:3000/productAll')
  }

  updateProd(data:{}): Observable<any> {
    return this.apiService.update('http://localhost:3000/product', data)
  }
}
