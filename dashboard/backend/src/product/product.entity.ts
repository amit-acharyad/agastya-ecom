import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class Product {
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
}
