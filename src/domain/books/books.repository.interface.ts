import { IRepository } from '../@shared/repository.interface';
import { BooksModel } from 'src/infrastructure/database/mongodb/mongoose/books/books.schema';

export interface IBooksRepository extends IRepository<BooksModel> {}
