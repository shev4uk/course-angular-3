import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nowDate: Date = new Date();

  text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa alias beatae perferendis eveniet vel reiciendis. Sint magni dicta alias voluptas consequatur beatae enim ipsa ducimus repellat, soluta sed nesciunt explicabo?';

  width = 0.5;

  salary = 500;

  product = {
    name: 'product 1',
    price: 200
  };

  coin = 23423263;

  products = [{
    id: 1,
    name: 'pepsi',
    price: 25
  }, {
    id: 2,
    name: 'roshen',
    price: 15
  }, {
    id: 3,
    name: 'beer',
    price: 30
  }];

  order = false;

  searchName = '';
  productModel = {
    name: '',
    price: ''
  };

  changeOrder() {
    this.order = !this.order;
  }

  addProduct() {
    const lastId = this.products[this.products.length-1].id + 1;
    this.products.push({id: lastId, name: this.productModel.name, price: +this.productModel.price});
  }

}
