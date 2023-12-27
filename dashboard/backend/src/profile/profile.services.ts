import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './profile.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { CreateProfileDTO } from './dto/createProfileDto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  //check if the user with the username already exist
  async checkProfileUsername(username: string) {
    const user = await this.profileRepository.findOne({
      where: {
        username: username,
      },
    });

    if (user) return true;
    return false;
  }
  async createUserProfile(createUserDto: CreateProfileDTO) {
    const profile = this.profileRepository.create();
    if (await this.checkProfileUsername(createUserDto.username))
      throw new Error('User with the username already exist');
    profile.name = createUserDto.name;
    profile.password = createUserDto.password;
    profile.username = createUserDto.username;
    return await this.profileRepository.save(profile);
  }
}
