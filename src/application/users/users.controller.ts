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

  @Get('by/gender')
  async getUsersByGender() {
    return await this.usersRepository.groupByGender();
  }

  @Get('count/by/country')
  async countUsersByCountr() {
    return await this.usersRepository.countByCountry();
  }

  @Get('all/eye-colors')
  async getAllEyeColors() {
    return await this.usersRepository.getAllEyeColors();
  }

  @Get('average/tags')
  async getAverageTags() {
    return await this.usersRepository.getAverageTags();
  }

  @Get('count/tag/:tag')
  async countTags(@Param('tag') tag: string): Promise<any> {
    return await this.usersRepository.countTags(tag);
  }
}
