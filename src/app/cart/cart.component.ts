import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../model/product';
import { AddToCartService } from '../Services/AddToCartService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private AddToCartService: AddToCartService,
    private http: HttpClient
  ) {}

  cartArray: any[] = [];
  allProducts: Product[] = [];

  cartProduct: {
    id?: string;
    name?: string;
    type?: string;
    brand?: string;
    model?: string;
    info?: string;
    description?: string;
    price?: string;
    color?: string;
    image?: string;
  };

  product: {
    id?: string;
    name?: string;
    type?: string;
    brand?: string;
    model?: string;
    info?: string;
    description?: string;
    price?: string;
    color?: string;
    image?: string;
  };

  ngOnInit(): void {
    this.cartProduct = this.AddToCartService.newProduct;
    console.log(this.cartProduct);
    this.fetchCartProducts();
  }

  onFetchProducts() {
    this.fetchCartProducts();
  }
  fetchCartProducts() {
    this.http
      .get(
        'https://product-list-e6cbb-default-rtdb.firebaseio.com/product.json'
      )
      .pipe(
        map((response) => {
          const products: any[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              products.push({ ...response[key], id: key });
            }
          }
          return products;
        })
      )
      .subscribe((products) => {
        console.log(products);
        this.allProducts = products;
      });
  }

  onProductDelete(id: string) {
    this.http
      .delete(
        'https://product-list-e6cbb-default-rtdb.firebaseio.com/product/' +
          id +
          '.json'
      )
      .subscribe();
  }

  onCartComplete() {
    this.http
      .delete(
        'https://product-list-e6cbb-default-rtdb.firebaseio.com/product.json'
      )
      .subscribe();
  }
}
