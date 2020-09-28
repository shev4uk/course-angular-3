import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [{
    id: 1,
    name: 'Product 1',
    price: 300,
    isStock: true
  }, {
    id: 2,
    name: 'Product 2',
    price: 3500,
    isStock: false
  }, {
    id: 3,
    name: 'Product 3',
    price: 50,
    isStock: true
  }];

  count = 0;

  name = '';

  constructor() { }

  ngOnInit() {
  }

  addToCart(event) {
    this.count++;
    console.log(event);
  }

}
