import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsRepository } from 'src/infrastructure/database/mongodb/mongoose/authors/authors.repository';
import {
  AuthorsModel,
  AuthorsSchema,
} from 'src/infrastructure/database/mongodb/mongoose/authors/authors.schema';
import { DbMongooseConfigService } from 'src/infrastructure/database/mongodb/mongoose/db-config.service';
import { AuthorsController } from './authors.controller';

@Module({
  imports: [
    MongooseModule.forRootAsync({ useClass: DbMongooseConfigService }),
    MongooseModule.forFeature([
      { name: AuthorsModel.name, schema: AuthorsSchema },
    ]),
  ],
  controllers: [AuthorsController],
  providers: [
    {
      provide: 'IAuthorsRepository',
      useClass: AuthorsRepository,
    },
  ],
})
export class AuthorsModule {}
