import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './profile.entity';
import { ProfileService } from './profile.services';

@Module({
  controllers: [ProfileController],
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  exports: [],
  providers: [ProfileService],
})
export class ProfileModule {}
