import { Module } from '@nestjs/common';
import { OrderController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './orders.entity';
import { ChannelEntity } from 'src/channel/channel.entity';
import { OrderService } from './orders.services';
import { ProductEntity } from 'src/product/product.entity';

@Module({
  controllers: [OrderController],
  imports: [
    TypeOrmModule.forFeature([OrderEntity, ChannelEntity, ProductEntity]),
  ],
  exports: [],
  providers: [OrderService],
})
export class OrdersModule {}
