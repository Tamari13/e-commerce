import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl= 'https://fakestoreapi.com/products'

  constructor(private http : HttpClient) { }

  getProducts() : Observable <IProduct[]>{
    return this.http.get<IProduct[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  addProduct(product : IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(this.baseUrl, product);
  }

}
