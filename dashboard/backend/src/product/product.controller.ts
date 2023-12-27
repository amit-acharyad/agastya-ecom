import { Controller, Post, HttpStatus, Req, Body } from '@nestjs/common';
import { productType } from './types/product.types';

@Controller('/products')
export class ProductController {
  @Post('')
  async listProduct(@Body() product: productType) {
    console.log(product);
  }
}
