import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProfileDTO } from './dto/createProfileDto';
import { ProductService } from 'src/product/product.services';
import { ProfileService } from './profile.services';
import { getAssociatedChannelDto } from './dto/getAssociatedChannel.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Post('')
  async createProfile(@Body() accountCreationDto: CreateProfileDTO) {
    return this.profileService.createUserProfile(accountCreationDto);
  }

  @Get('channel')
  async getAssociatedChannel(profileId: getAssociatedChannelDto) {
    return await this.profileService.getAssociatedChannel(profileId);
  }
}
