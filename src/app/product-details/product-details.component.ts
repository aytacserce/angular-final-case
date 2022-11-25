import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: {
    id: number;
    name: string;
    type: string;
    brand: string;
    model: string;
    info: string;
    description: string;
    price: string;
    color: string;
    image: string;
  };
  productId: string | number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private products: ProductsComponent
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.productId);
    this.product = this.products.products.find(
      (product) => product.id == this.productId
    );
  }
}
