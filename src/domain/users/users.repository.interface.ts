import { UsersModel } from 'src/infrastructure/database/mongodb/mongoose/users/users.schema';
import { IRepository } from '../@shared/repository.interface';

export type LimitType = {
  limit: number;
};

export interface IUsersRepository extends IRepository<UsersModel> {
  countActiveUsers(): Promise<number>;
  averageAge(): Promise<number>;
  favoriteFruits(limit: LimitType): Promise<any>;
  groupByGender(): Promise<any>;
  countByCountry(): Promise<any>;
  getAllEyeColors(): Promise<any>;
  getAverageTags(): Promise<any>;
}
