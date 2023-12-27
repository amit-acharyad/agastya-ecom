import { channel } from 'diagnostics_channel';
import { ChannelEntity } from 'src/channel/channel.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
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
}
