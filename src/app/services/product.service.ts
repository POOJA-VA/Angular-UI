import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { Cart } from '../Models/cart';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  saveProducts(products: Product[]){
    this.storage.addProducts(products);
  }

  getCachedProducts(): Product[] {
    return this.storage.getCachedProducts();
  }
}