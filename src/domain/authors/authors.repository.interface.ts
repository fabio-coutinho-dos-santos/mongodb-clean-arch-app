import { AuthorsSchema } from 'src/infrastructure/database/mongodb/mongoose/authors/authors.schema';
import { IRepository } from '../@shared/repository.interface';

export interface IAuthorsRepository extends IRepository<AuthorsSchema> {}
