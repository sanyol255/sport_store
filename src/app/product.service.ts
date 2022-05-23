import { Injectable } from '@angular/core';
import { Product } from "./product";
import { PRODUCTS } from "./products-list";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    this.messageService.add('Available products:');
    return products;
  }
}
