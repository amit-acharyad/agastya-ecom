import { ApiProperty } from '@nestjs/swagger';

export class AddChannelToProfileDTO {
  @ApiProperty()
  profileId: number;

  @ApiProperty()
  channelId: number;
}
