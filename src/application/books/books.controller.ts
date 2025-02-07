import { Controller, Get, Inject } from '@nestjs/common';
import { IBooksRepository } from 'src/domain/books/books.repository.interface';

@Controller('books')
export class BooksController {
  @Inject('IBooksRepository')
  private readonly booksRepository: IBooksRepository;
  @Get('')
  async getUsers() {
    return await this.booksRepository.findAll();
  }
}
