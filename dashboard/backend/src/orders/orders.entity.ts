import { ChannelEntity } from 'src/channel/channel.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Order' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ChannelEntity, (channel) => channel.order)
  channel: ChannelEntity;

  @Column()
  price: number;

  @Column()
  orderId: number;
}
