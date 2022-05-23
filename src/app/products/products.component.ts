import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { PRODUCTS } from "../products-list";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  selectedProduct?: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
