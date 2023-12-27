import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [],
})
export class ProductModule {}
