import { Controller, Get, Inject } from '@nestjs/common';
import { IAuthorsRepository } from 'src/domain/authors/authors.repository.interface';

@Controller('authors')
export class AuthorsController {
  @Inject('IAuthorsRepository')
  private readonly authorsRepository: IAuthorsRepository;

  @Get('')
  async findAll() {
    return await this.authorsRepository.findAll();
  }
}
