import { Body, Controller, Post } from '@nestjs/common';

@Controller('new-order')
export class OrderController {
  @Post('')
  async newOrderComponent(@Body() orderBody: any) {
    console.log(orderBody);
  }
}
