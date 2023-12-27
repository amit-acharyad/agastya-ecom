import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDTO {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: true })
  password: string;
}
