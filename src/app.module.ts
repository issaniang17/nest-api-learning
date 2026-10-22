import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module.js';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.DB_HOST_URI,
        ssl: { rejectUnauthorized: false },
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    BooksModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
