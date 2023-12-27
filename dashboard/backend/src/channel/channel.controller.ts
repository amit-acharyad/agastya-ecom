import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChannelService } from './channel.services';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}
  @Get('')
  async getChannel() {
    return await this.channelService.getAllChannels();
  }

  @Post('')
  async postChannel(@Body() channel: channelType) {
    const createdChannel = await this.channelService.postChannel(channel);
    // return await this.channelService;
  }
}
