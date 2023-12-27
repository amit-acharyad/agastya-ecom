import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
  constructor(private readonly productService: ProductService) {}

  async addProducts(product: any) {
    console.log(product);
  }
}
