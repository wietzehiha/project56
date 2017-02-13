import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from './model/product';
import { ProductsService } from '../services/products.services'

@Component({
  providers: [ProductsService],
  templateUrl: './app/products/products.component.html',
})

export class ProductsComponent implements OnInit{

  // Constructor with injected service
  constructor(
    private productsService: ProductsService
  ){}
  // Local properties
  products: Product[];
  // Input properties
  @Input() listId: string;

  loadProducts(){
    // Get all Products
    this.productsService.getVideokaarten()
      .subscribe(
        products => {
          this.products = products;
          console.log(products);
        }, //Bind to view
        err => {
          // Log errors if any
          console.log('----------------------------------------------------------------------------------------------');
          console.log(err);
        });
  }

  ngOnInit(){
    // Load products
    this.loadProducts();
  }

}
