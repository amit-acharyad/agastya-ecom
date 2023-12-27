import { Controller, Body, Post } from "@nestjs/common";

@Controller("products")
export class ProductController {
  @Post("")
  async addProducts(@Body() bd: any) {
    console.log(bd);
  }
}
