import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelModule } from './channel/channel.module';

@Module({
  imports: [
    ProductModule,
    ChannelModule,
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
