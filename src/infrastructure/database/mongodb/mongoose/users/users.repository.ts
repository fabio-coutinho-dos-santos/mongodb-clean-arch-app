import { IUsersRepository } from 'src/domain/users/users.repository.interface';
import { BaseRepository } from '../base.repository';
import { UsersModel } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class UsersRepository
  extends BaseRepository<UsersModel>
  implements IUsersRepository
{
  constructor(
    @InjectModel(UsersModel.name)
    private readonly authorsModel: Model<UsersModel>,
  ) {
    super(authorsModel);
  }
}
