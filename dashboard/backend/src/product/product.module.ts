import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ChannelEntity } from 'src/channel/channel.entity';
import { ProfileEntity } from 'src/profile/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, ChannelEntity, ProfileEntity]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [],
})
export class ProductModule {}
