import { Get, Inject, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { AddProductDto } from './dtos/addProduct.dto';
import { ProfileEntity } from 'src/profile/profile.entity';
import { ChannelEntity } from 'src/channel/channel.entity';
import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';
import { ChatPromptTemplate, MessagesPlaceholder } from 'langchain/prompts';

@Injectable()
export class ProductService {
  chainCall = 0;
  bufferChain: any = null;
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

  async chatMessage(message) {
    if (!this.chainCall) {
      const llm = new OpenAI({
        temperature: 0.9,
      });

      const productData = await this.productRepository.find();
      const chatPrompt = ChatPromptTemplate.fromMessages([
        [
          'system',
          `The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.`,
        ],
        new MessagesPlaceholder('history'),
        ['human', '{input}'],
      ]);
      const text = `${productData} is the product and inventory data of an organization.
      You need to guide them regarding their stock and products.`;
      this.bufferChain = new ConversationChain({
        memory: new BufferMemory({
          returnMessages: true,
          memoryKey: 'history',
        }),
        prompt: chatPrompt,
        llm,
      });
    }
  }
}
