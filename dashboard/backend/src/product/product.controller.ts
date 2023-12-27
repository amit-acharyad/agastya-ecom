import { Controller, Post, HttpStatus, Req, Body } from '@nestjs/common';
import { productType } from './types/product.types';
import { AddProductDto, MessageDto } from './dtos/addProduct.dto';
import { ProductService } from './product.services';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post('')
  async addProducts(@Body() product: AddProductDto) {
    await this.productService.addProducts(product);
  }

  @Post('/chat')
  async chatComponent(@Body() message: MessageDto) {
    await this.productService.chatMessage(message);
  }
}
