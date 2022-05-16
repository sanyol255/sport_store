import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: Product = {
    id: 1,
    name: 'Soccer ball',
    brand: 'Adidas',
    price: 29.8,
    description: 'New format soccer ball from Adidas'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
