import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.services';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [],
})
export class ProductModule {}
