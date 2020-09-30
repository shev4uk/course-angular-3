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
    discount: 5,
    isStock: true,
    label: 1
  }, {
    id: 2,
    name: 'Product 2',
    price: 3500,
    discount: 0,
    isStock: false,
    label: 3
  }, {
    id: 3,
    name: 'Product 3',
    price: 50,
    discount: 0,
    isStock: true,
    label: 2
  }, {
    id: 4,
    name: 'Product 4',
    price: 150,
    discount: 4,
    isStock: true,
    label: 0
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
