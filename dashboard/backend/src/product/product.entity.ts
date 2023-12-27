import { channel } from 'diagnostics_channel';
import { ChannelEntity } from 'src/channel/channel.entity';
import { OrderEntity } from 'src/orders/orders.entity';
import { ProfileEntity } from 'src/profile/profile.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  sku: string;

  @Column()
  price: number;

  @Column()
  costprice: number;

  @Column()
  description: string;

  @ManyToMany(() => ChannelEntity, (channel) => channel.id)
  @JoinTable()
  channels: ChannelEntity[];

  @ManyToOne(() => ProfileEntity, (profile) => profile.products)
  @JoinTable()
  profiles: ProfileEntity;

  @OneToOne(() => OrderEntity, (order) => order.product)
  @JoinColumn()
  order: OrderEntity;
}
