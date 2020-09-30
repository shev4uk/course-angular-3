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

  discount: number;

  constructor() { }

  ngOnInit() {
    console.log(this.productItem);
    this.discount = this.productItem.price - this.productItem.price * this.productItem.discount / 100;
  }

  addCart(id, name) {
    console.log(`${name} add to cart`, id);
    this.addProductItemCart.emit(id);
  }

}
