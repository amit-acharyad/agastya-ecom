import { ProductEntity } from 'src/product/product.entity';
import { ProfileEntity } from 'src/profile/profile.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
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

  @ManyToMany(() => ProductEntity, (product) => product.id)
  @JoinTable()
  products: ProductEntity[];

  @ManyToMany(() => ProductEntity, (profile) => profile.id)
  @JoinTable()
  profiles: ProfileEntity[];
}
