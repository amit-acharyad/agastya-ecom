import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChannelEntity } from './channel.entity';
import { HttpStatus } from '@nestjs/common';
import { ChannelDto } from './dtos/product.dto';

export class ChannelService {
  constructor(
    @InjectRepository(ChannelEntity)
    private readonly channelRepository: Repository<ChannelEntity>,
  ) {}

  async getAllChannels() {
    try {
      const channels = await this.channelRepository.find({
        relations: ['products'],
      });
      if (channels) {
        return {
          status: HttpStatus.OK,
          data: channels,
          length: channels.length,
        };
      }
    } catch (err) {
      throw new Error('There has been an error');
    }
  }

  async postChannel(channel: ChannelDto) {
    const typeChannel = this.channelRepository.create();
    typeChannel.name = channel.name;
    typeChannel.url = channel.url;
    typeChannel.products = [];
    const response = await this.channelRepository.save(typeChannel);
    console.log(response);
  }
}
