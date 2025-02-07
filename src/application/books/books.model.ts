import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbMongooseConfigService } from 'src/infrastructure/database/mongodb/mongoose/db-config.service';
import { BooksController } from './books.controller';
import {
  BooksModel,
  BooksSchema,
} from 'src/infrastructure/database/mongodb/mongoose/books/books.schema';
import { BooksRepository } from 'src/infrastructure/database/mongodb/mongoose/books/books.repository';

@Module({
  imports: [
    MongooseModule.forRootAsync({ useClass: DbMongooseConfigService }),
    MongooseModule.forFeature([{ name: BooksModel.name, schema: BooksSchema }]),
  ],
  controllers: [BooksController],
  providers: [
    {
      provide: 'IBooksRepository',
      useClass: BooksRepository,
    },
  ],
})
export class BooksModule {}
