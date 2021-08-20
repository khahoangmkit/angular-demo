import { Component } from '@angular/core';
import {Product} from "./model/Product";
import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];
  ProductService;

  constructor() {
    this.ProductService = new ProductService();
  }

  getProducts() {
    this.products = this.ProductService.getProducts();
  }
}
