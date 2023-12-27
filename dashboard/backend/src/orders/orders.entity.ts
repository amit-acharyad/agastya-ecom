import { ChannelEntity } from 'src/channel/channel.entity';
import { ProductEntity } from 'src/product/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Order' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ChannelEntity, (channel) => channel.order)
  @JoinColumn()
  channel: ChannelEntity;

  @Column()
  price: number;

  @Column()
  orderId: string;

  @Column()
  title: string;

  @Column()
  quantity: number;

  @OneToOne(() => ProductEntity, (product) => product.order, { cascade: true })
  @JoinColumn()
  product: ProductEntity;
}
