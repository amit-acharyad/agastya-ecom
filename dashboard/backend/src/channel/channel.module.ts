import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelEntity } from './channel.entity';
import { ChannelService } from './channel.services';
import { ProfileEntity } from 'src/profile/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChannelEntity]),
    TypeOrmModule.forFeature([ProfileEntity]),
  ],
  controllers: [ChannelController],
  exports: [],
  providers: [ChannelService],
})
export class ChannelModule {}
