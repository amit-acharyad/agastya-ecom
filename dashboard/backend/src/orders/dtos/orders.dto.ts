import { ApiProperty } from '@nestjs/swagger';

export class OrderDto {
  @ApiProperty()
  url: string;

  @ApiProperty()
  orderId: string;

  @ApiProperty()
  shipPostalCode: string;

  @ApiProperty()
  shipAddress1: string;

  @ApiProperty()
  shipCity: string;

  @ApiProperty()
  shipCountry: string;

  @ApiProperty()
  shipCountryCode: string;

  @ApiProperty()
  qty: number;

  @ApiProperty()
  title: string;
  @ApiProperty()
  sku: string;

  @ApiProperty()
  price: number;
}
