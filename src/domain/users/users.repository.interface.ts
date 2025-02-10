import { UsersModel } from 'src/infrastructure/database/mongodb/mongoose/users/users.schema';
import { IRepository } from '../@shared/repository.interface';

export type LimitType = {
  limit: number;
};

export interface IUsersRepository extends IRepository<UsersModel> {
  countActiveUsers(): Promise<number>;
  averageAge(): Promise<number>;
  favoriteFruits(limit: LimitType): Promise<unknown>;
  groupByGender(): Promise<unknown>;
  countByCountry(): Promise<unknown>;
  getAllEyeColors(): Promise<unknown>;
  getAverageTags(): Promise<unknown>;
  countTags(tag: string): Promise<unknown>;
}
