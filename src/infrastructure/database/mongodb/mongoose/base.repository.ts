import { UnprocessableEntityException } from '@nestjs/common';
import { Model } from 'mongoose';
import { IRepository } from 'src/domain/@shared/repository.interface';

export abstract class BaseRepository<T> implements IRepository<T> {
  private model: Model<T>;

  protected constructor(repository: Model<T>) {
    this.model = repository;
  }

  async findById(id: string): Promise<T> {
    const author = await this.model.findById(id).exec();
    if (!author) {
      throw new Error(`Author with id ${id} not found`);
    }
    return author;
  }

  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }

  async create(entity: T): Promise<T> {
    return await this.model
      .create(entity)
      .then(
        (response) =>
          response ??
          Promise.reject(
            new UnprocessableEntityException(`Error creating entity`),
          ),
      );
  }
}
