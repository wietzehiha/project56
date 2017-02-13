import { Component, Input } from '@angular/core';
import { Cart } from './model/cart';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'cart',
  templateUrl: './app/cart/cart.component.html',
})
export class CartComponent {

  @Input() cart:Array<Object>;

  price: number;
  videokaart: string;
  processor: string;
  memory: string;

  types = ['gaming', 'web', 'office'];

  model = new Cart(0, this.types[0], 0, '', '', '');

  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.price = this.model.price / 100;

    switch (this.model.type) {
      case 'gaming':
        this.videokaart = this.getVideokaart(this.price * 40);
        this.processor = this.getProcessor(this.price * 30);
        this.memory = this.getMemory(this.price * 30);
        break;
      case 'office':
        this.videokaart = this.getVideokaart(this.price * 20);
        this.processor = this.getProcessor(this.price * 40);
        this.memory = this.getMemory(this.price * 40);
        break;
      case 'web':
        this.videokaart = this.getVideokaart(this.price * 20);
        this.processor = this.getProcessor(this.price * 30);
        this.memory = this.getMemory(this.price * 50);
        break;

    }

    this.model = new Cart(0, this.model.type, this.model.price, this.videokaart, this.processor, this.memory);
  }

  newCart() {
    this.model = new Cart(0, this.types[0], 0, '', '', '');
  }

  getVideokaart(price: number) {
    return 'test';
  }

  getProcessor(price: number) {
    return 'test';
  }

  getMemory(price: number) {
    return 'test';
  }
}
