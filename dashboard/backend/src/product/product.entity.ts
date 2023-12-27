import { channel } from 'diagnostics_channel';
import { ChannelEntity } from 'src/channel/channel.entity';
import { ProfileEntity } from 'src/profile/profile.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
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

  @ManyToOne(() => ProfileEntity, (profile) => profile.id)
  @JoinTable()
  profiles: ProfileEntity[];
}
