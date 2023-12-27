import { Module } from '@nestjs/common';
import { OrderController } from './orders.controller';

@Module({
  controllers: [OrderController],
  imports: [],
  exports: [],
  providers: [],
})
export class OrdersModule {}
