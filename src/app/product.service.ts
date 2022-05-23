import { Injectable } from '@angular/core';
import { Product } from "./product";
import { PRODUCTS } from "./products-list";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }
}
