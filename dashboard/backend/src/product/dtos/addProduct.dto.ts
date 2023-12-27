import { ApiProperty } from '@nestjs/swagger';

export class AddProductDto {
  @ApiProperty()
  productName: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  costPrice: number;

  @ApiProperty()
  stock: number;

  @ApiProperty()
  channels: number[];

  @ApiProperty()
  profileId: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  sku: string;
}
