import { Controller, Get, HttpStatus } from '@nestjs/common';

@Controller('/products')
export class ProductController {
  @Get('')
  async getProducts() {
    return {
      status: HttpStatus.OK,
      data: 'Everything is Okay',
    };
  }
}
