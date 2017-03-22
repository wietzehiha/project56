import { Component, OnInit, Input, OnChanges, Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';
import { ProductsService } from '../services/products.services'

@Component({
  selector: 'products',
  providers: [ProductsService],
  templateUrl: './app/products/products.component.html',
  pipes: [ArraySortPipe]
})

@Pipe({
  name: "sort"
})

export class ProductsComponent implements OnInit{

  // Constructor with injected service
  constructor(
    private productsService: ProductsService
  ){
    this.productsService.getVideokaarten()
      .subscribe(
        products => {
          this.videokaarten = products;
          this.videokaarten = this.videokaarten.products;
        });

    this.productsService.getProcessor()
      .subscribe(
        products => {
          this.processoren = products;
          this.processoren = this.processoren.products;
        });

    this.productsService.getMemory()
      .subscribe(
        products => {
          this.memorykaarten = products;
          this.memorykaarten = this.memorykaarten.products;
        });

  }
  // Local properties
  videokaarten:  Product[];
  processoren:   Product[];
  memorykaarten: Product[];

  ngOnInit(){

  }

}

export class ArraySortPipe implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
