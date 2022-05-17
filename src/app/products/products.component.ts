import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import { PRODUCTS } from "../products-list";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedProduct?: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
