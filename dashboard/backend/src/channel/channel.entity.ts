import { OrderEntity } from 'src/orders/orders.entity';
import { ProductEntity } from 'src/product/product.entity';
import { ProfileEntity } from 'src/profile/profile.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Channel' })
export class ChannelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToMany(() => ProductEntity, (product) => product.channels)
  @JoinTable()
  products: ProductEntity[];

  @ManyToMany(() => ProductEntity, (profile) => profile.channels)
  @JoinTable()
  profiles: ProfileEntity[];

  @OneToOne(() => OrderEntity, (order) => order.channel)
  order: OrderEntity;
}
