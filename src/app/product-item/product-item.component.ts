import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  @Output() addProductItemCart = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.productItem);
  }

  addCart(id, name) {
    console.log(`${name} add to cart`, id);
    this.addProductItemCart.emit(id);
  }

}
