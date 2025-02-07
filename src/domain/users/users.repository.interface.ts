import { UsersModel } from 'src/infrastructure/database/mongodb/mongoose/users/users.schema';
import { IRepository } from '../@shared/repository.interface';

export interface IUsersRepository extends IRepository<UsersModel> {}
