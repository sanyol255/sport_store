import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productName = 'Soccer ball';
  productBrand = 'Adidas';
  productPrice = 29.8;


  constructor() { }

  ngOnInit(): void {
  }

}
