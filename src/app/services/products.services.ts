import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product }           from '../products/model/product';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductsService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  // private commentsUrl = 'http://localhost:3000/api/comments';
  private productsUrl = 'http://localhost:8080/project56/';

  header() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    return headers;
  }

  // Get all videokaarten.
  getVideokaarten() : Observable<Product[]>{
    const headers = this.header();
    return this.http.get(this.productsUrl + 'videokaart', {headers: headers})
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  // Get all processoren.
  getProcessor() : Observable<Product[]>{

    const headers = this.header();
    return this.http.get(this.productsUrl + 'processor', {headers: headers})
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  // Get all memorycards.
  getMemory() : Observable<Product[]>{
    const headers = this.header();
    return this.http.get(this.productsUrl + 'geheugen', {headers: headers})
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  getProduct(ean: number) : Observable<Product[]> {
    const headers = this.header();
    return this.http.get(this.productsUrl + 'component?ean=' + ean, {headers: headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }
}
