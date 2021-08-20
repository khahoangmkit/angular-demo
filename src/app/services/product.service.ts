import { Injectable } from '@angular/core';
import {Product} from "../model/Product";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loggerService: LoggerService) {
    this.loggerService.log("Product Service Constructed");
  }

  public getProducts() {
    this.loggerService.log("Product Service getService");

    let products: Product[];

    products = [
      new Product(1, "Iphone", 5000),
      new Product(2, "Samsung", 3000),
      new Product(3, "Xiaomi", 2500),
      new Product(4, "Oppo", 2500),
    ];

    // this.loggerService.log(products);

    return products;
  }
}
