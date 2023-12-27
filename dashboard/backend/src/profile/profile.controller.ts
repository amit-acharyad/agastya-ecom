import { Body, Controller, Post } from '@nestjs/common';
import { CreateProfileDTO } from './dto/createProfileDto';
import { ProductService } from 'src/product/product.services';
import { ProfileService } from './profile.services';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Post('')
  async createProfile(@Body() accountCreationDto: CreateProfileDTO) {
    return this.profileService.createUserProfile(accountCreationDto);
  }
}
