import { IAuthorsRepository } from 'src/domain/authors/authors.repository.interface';
import { AuthorsDocument, AuthorsSchema } from './authors.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class AuthorsRepository implements IAuthorsRepository {
  constructor(
    @InjectModel(AuthorsSchema.name)
    private readonly authorsModel: Model<AuthorsDocument>,
  ) {}

  async findById(id: string): Promise<AuthorsSchema> {
    const author = await this.authorsModel.findById(id).exec();
    if (!author) {
      throw new Error(`Author with id ${id} not found`);
    }
    return author;
  }

  async findAll(): Promise<AuthorsSchema[]> {
    return await this.authorsModel.find().exec();
  }

  async create(entity: AuthorsSchema): Promise<AuthorsSchema> {
    const author = new this.authorsModel(entity);
    return await author.save();
  }
}
