import { Component, Input } from '@angular/core';
import { Cart } from './model/cart';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ProductsService} from '../services/products.services';
import { ProductsComponent } from '../products/products.component';
import 'rxjs/Rx';

@Component({
  selector: 'cart',
  templateUrl: './app/cart/cart.component.html',
  providers: [ProductsService]
})
export class CartComponent {

  constructor(private productsService: ProductsService) {

    this.productsService
      .getVideokaarten().subscribe(
      response => this.videocards = response,
      err => {console.log(err);});

    this.productsService
      .getProcessor().subscribe(
      response => this.processors = response,
      err => {console.log(err);});

    this.productsService
      .getMemory().subscribe(
      response => this.memorys = response,
      err => {console.log(err);});
  }

  price: number;
  videokaart: any;
  processor: any;
  memory: any;

  videocards: any;
  processors: any;
  memorys: any;
  totaal: number = 0;

  types = ['gaming', 'web', 'office'];

  model = new Cart(0, this.types[0], 0, '', '', '', 0);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.price = this.model.price / 100;

    switch (this.model.type) {
      case 'gaming':
        this.videokaart = this.getProduct(this.price * 40, this.videocards);
        this.processor = this.getProduct(this.price * 30, this.processors);
        this.memory = this.getProduct(this.price * 30, this.memorys);
        break;
      case 'office':
        this.videokaart = this.getProduct(this.price * 20, this.videocards);
        this.processor = this.getProduct(this.price * 40, this.processors);
        this.memory = this.getProduct(this.price * 40, this.memorys);
        break;
      case 'web':
        this.videokaart = this.getProduct(this.price * 20, this.videocards);
        this.processor = this.getProduct(this.price * 30, this.processors);
        this.memory = this.getProduct(this.price * 50, this.memorys);
        break;
    }

    this.model = this.setCartWithNewData();

  }

  newCart() {
    this.model = new Cart(0, this.types[0], 0, '', '', '', 0);
  }

  getProduct(price: number, products: any) {
    return products.products[0];
  }

  removeVideo() {
    this.model.videokaart = '';
    this.model = this.setCartWithNewData();
  }

  removeProcessor() {
    this.model.processor = '';
    this.model = this.setCartWithNewData();
  }

  removeMemory() {
    this.model.memory = '';
    this.model = this.setCartWithNewData();
  }

  totaalPrice() {
    return this.videokaart.price + this.processor.price + this.memory.price;
  }

  setCartWithNewData() {
    this.totaal = this.totaalPrice();
    return new Cart(0, this.model.type, this.model.price, this.videokaart, this.processor, this.memory, this.totaal);
  }


}
