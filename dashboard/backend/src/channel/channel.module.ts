import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelEntity } from './channel.entity';
import { ChannelService } from './channel.services';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelEntity])],
  controllers: [ChannelController],
  exports: [],
  providers: [ChannelService],
})
export class ChannelModule {}
