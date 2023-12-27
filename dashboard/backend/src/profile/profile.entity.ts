import { ChannelEntity } from 'src/channel/channel.entity';
import { ProductEntity } from 'src/product/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  totalSales: number;

  @OneToMany(() => ProductEntity, (product) => product.id)
  products: ProductEntity[];

  @ManyToMany(() => ChannelEntity, (channel) => channel.id)
  @JoinTable()
  channels: ChannelEntity[];
}
