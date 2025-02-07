import { IBooksRepository } from 'src/domain/books/books.repository.interface';
import { BaseRepository } from '../base.repository';
import { BooksModel } from './books.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class BooksRepository
  extends BaseRepository<BooksModel>
  implements IBooksRepository
{
  constructor(
    @InjectModel(BooksModel.name)
    private readonly booksModel: Model<BooksModel>,
  ) {
    super(booksModel);
  }
}
