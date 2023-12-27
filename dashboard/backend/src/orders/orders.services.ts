import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './orders.entity';
import { Repository } from 'typeorm';
import { ChannelEntity } from 'src/channel/channel.entity';
import { OrderDto } from './dtos/orders.dto';
import { ProductEntity } from 'src/product/product.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,
    @InjectRepository(ChannelEntity)
    private readonly channelRepo: Repository<ChannelEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) {}

  async addOrder(product: OrderDto) {
    const channel = await this.channelRepo.findOne({
      where: { url: product.url },
    });

    const pr = await this.productRepo.findOne({
      where: {
        // sku: product.sku,
        id: 1,
      },
    });
    const newOrder = new OrderEntity();
    newOrder.channel = channel;
    newOrder.orderId = product.orderId;
    newOrder.product = pr;
    newOrder.price = product.price;

    // const creaProduct = this.orderRepo.create({
    //   product: pr,
    //   price: product.price,
    //   orderId: product.orderId,
    //   channel: channel,
    // });

    const saved = await this.orderRepo.save(newOrder);
    console.log(saved);
  }

  async getAllOrder() {
    const allOrders = await this.orderRepo.find();
    return {
      data: allOrders,
      count: allOrders.length,
    };
  }
}
