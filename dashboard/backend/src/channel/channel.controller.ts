import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChannelService } from './channel.services';
import { ChannelDto } from './dtos/addChannel.dto';
import { AddChannelToProfileDTO } from './dtos/addChannelToProfile.dto';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}
  @Get('')
  async getChannel() {
    return await this.channelService.getAllChannels();
  }

  @Post('')
  async postChannel(@Body() channel: ChannelDto) {
    const createdChannel = await this.channelService.postChannel(channel);
    return createdChannel;
    // return await this.channelService;
  }

  @Post('add-to-profile')
  async addChannelToProfile(@Body() addChannelDto: AddChannelToProfileDTO) {
    return await this.channelService.addChannelToProfile(addChannelDto);
  }
}
