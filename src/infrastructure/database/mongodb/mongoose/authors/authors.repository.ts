import { IAuthorsRepository } from 'src/domain/authors/authors.repository.interface';
import { AuthorsDocument, AuthorsModel } from './authors.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../base.repository';

export class AuthorsRepository
  extends BaseRepository<AuthorsModel>
  implements IAuthorsRepository
{
  constructor(
    @InjectModel(AuthorsModel.name)
    private readonly authorsModel: Model<AuthorsModel>,
  ) {
    super(authorsModel);
  }
}
