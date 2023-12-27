import { ApiProperty } from '@nestjs/swagger';

export class ChannelDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  url: string;
}
