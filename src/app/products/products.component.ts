import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { ProductService } from "../product.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  selectedProduct?: Product;

  products: Product[] = [];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.messageService.add(`Selected product: ${product.id}. ${product.name}`);
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
