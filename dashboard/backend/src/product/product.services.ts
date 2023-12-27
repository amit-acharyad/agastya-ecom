import { Get, Inject, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { AddProductDto } from './dtos/addProduct.dto';
import { ProfileEntity } from 'src/profile/profile.entity';
import { ChannelEntity } from 'src/channel/channel.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(ProfileEntity)
    private readonly profileRepo: Repository<ProfileEntity>,
    @InjectRepository(ChannelEntity)
    private readonly channelRepo: Repository<ChannelEntity>,
  ) {}

  async addProducts(product: AddProductDto) {
    const user = await this.profileRepo.findOne({
      where: { id: product.profileId },
      relations: ['products', 'channels'],
    });

    const newProduct = {
      sku: product.sku,
      costprice: product.costPrice,
      description: product.description,
      title: product.productName,
      price: product.price,
      channels: [],
    };
    console.log(newProduct);
    for (let channel of product.channels) {
      const foundChannel = await this.channelRepo.findOne({
        where: { id: channel },
      });
      console.log(foundChannel);
      if (foundChannel) {
        newProduct.channels.push(foundChannel);
        const url = foundChannel.url;

        const fetchedData = await fetch(`http://localhost:4000/products`, {
          method: 'POST',
          body: JSON.stringify(newProduct),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(await fetchedData.json);
        //send post data to backend
      }
    }
    await this.productRepository.save(newProduct);
  }
}
