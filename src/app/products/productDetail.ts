import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from './model/product';
import { ProductsService } from '../services/products.services';
import { ActivatedRoute } from '@angular/router';
import { NgModule }      from '@angular/core';

@Component({
  providers: [ProductsService],
  templateUrl: './app/products/productDetail.html',
})

export class ProductDetail implements OnInit{
  // Constructor with injected service
  id: number;
  private sub: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    // Get all Products
    this.productsService.getProduct(this.id)
      .subscribe(
        products => {
          this.product = products;
          console.log(this.product);
        }, //Bind to view
        err => {
          // Log errors if any
          console.log('----------------------------------------------------------------------------------------------');
          console.log(err);
        });

  }  // Local properties
  product  : Product[];

  ngOnInit(){

  }
}
