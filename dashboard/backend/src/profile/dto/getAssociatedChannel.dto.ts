import { ApiProperty } from '@nestjs/swagger';

export class getAssociatedChannelDto {
  @ApiProperty()
  profileId: number;
}
