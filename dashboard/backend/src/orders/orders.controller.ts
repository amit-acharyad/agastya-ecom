import { Body, Controller, Post, Get } from '@nestjs/common';
import { OrderService } from './orders.services';
import { OrderDto } from './dtos/orders.dto';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Post('new')
  async newOrderComponent(@Body() orderBody: OrderDto) {
    await this.orderService.addOrder(orderBody);
  }

  @Get('all')
  async getAllOrders() {
    return await this.orderService.getAllOrder();
  }
}
