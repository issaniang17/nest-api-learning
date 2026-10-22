import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './books.entity.js';
import { BooksService } from './books.service.js';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.booksService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Book | null> {
    return this.booksService.findOne(id)
  }

  @Post()
  create(@Body() createBookDto: Book): Promise<Book> {
    return this.booksService.create(createBookDto)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateBookDto: Partial<Book>
  ): Promise<Book | null> {
    return this.booksService.update(id, updateBookDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.booksService.remove(id)
  }
}
