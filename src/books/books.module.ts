import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  // 2 komponen
  //book controller membutuhkan getAllBooks yg ada di books service
  controllers: [BooksController], 
  providers: [BooksService]
})
export class BooksModule {}
