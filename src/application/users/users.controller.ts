import { Controller, Get, Inject } from '@nestjs/common';
import { IUsersRepository } from 'src/domain/users/users.repository.interface';

@Controller('users')
export class UsersController {
  @Inject('IUsersRepository')
  private readonly usersRepository: IUsersRepository;
  @Get('')
  async getUsers() {
    return await this.usersRepository.findAll();
  }
}
