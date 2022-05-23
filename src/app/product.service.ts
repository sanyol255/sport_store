import { Injectable } from '@angular/core';
import { Product } from "./product";
import { PRODUCTS } from "./products-list";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }
}
