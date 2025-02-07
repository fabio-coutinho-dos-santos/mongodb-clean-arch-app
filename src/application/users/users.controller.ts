import { Controller, Get, Inject, Param } from '@nestjs/common';
import { IUsersRepository } from 'src/domain/users/users.repository.interface';

@Controller('users')
export class UsersController {
  @Inject('IUsersRepository')
  private readonly usersRepository: IUsersRepository;
  @Get('')
  async getUsers() {
    return await this.usersRepository.findAll();
  }

  @Get('count/active')
  async countActiveUsers() {
    return await this.usersRepository.countActiveUsers();
  }

  @Get('age/average')
  async averageAge() {
    return await this.usersRepository.averageAge();
  }

  @Get('favorite-fruits/:limit')
  async getFavoriteFruites(@Param('limit') limit: number) {
    return await this.usersRepository.favoriteFruits({
      limit: limit,
    });
  }
}
