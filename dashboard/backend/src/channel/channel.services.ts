import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChannelEntity } from './channel.entity';
import { HttpStatus } from '@nestjs/common';
import { ChannelDto } from './dtos/addChannel.dto';
import { AddChannelToProfileDTO } from './dtos/addChannelToProfile.dto';
import { ProfileEntity } from 'src/profile/profile.entity';

export class ChannelService {
  constructor(
    @InjectRepository(ChannelEntity)
    private readonly channelRepository: Repository<ChannelEntity>,
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
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

  async addChannelToProfile(addChannelDto: AddChannelToProfileDTO) {
    const currentProfile = await this.profileRepository.findOne({
      where: { id: addChannelDto.profileId },
    });
    const channel = await this.channelRepository.findOne({
      where: { id: addChannelDto.channelId },
    });
    if (!currentProfile || channel) return new Error('Bad username or Channel');
    currentProfile.channels.push(channel);
    await this.profileRepository.save(currentProfile);
    return 'Ok';
  }
}
