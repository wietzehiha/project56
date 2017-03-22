import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HttpModule }      from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ProductDetail } from './products/productDetail';

import { ProductsService } from './services/products.services';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetail },
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetail
  ],
  bootstrap:    [
    AppComponent,
  ]
})
export class AppModule {

}
