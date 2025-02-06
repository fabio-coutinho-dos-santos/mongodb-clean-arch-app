import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsRepository } from 'src/infrastructure/database/mongodb/mongoose/authors/authors.repository';
import {
  authorsSchema,
  AuthorsSchema,
} from 'src/infrastructure/database/mongodb/mongoose/authors/authors.schema';
import { DbMongooseConfigService } from 'src/infrastructure/database/mongodb/mongoose/db-config.service';
import { AuthorsController } from './authors.controller';

@Module({
  imports: [
    MongooseModule.forRootAsync({ useClass: DbMongooseConfigService }),
    MongooseModule.forFeature([
      { name: AuthorsSchema.name, schema: authorsSchema },
    ]),
  ],
  controllers: [AuthorsController],
  providers: [
    {
      provide: 'AuthorsRepository',
      useClass: AuthorsRepository,
    },
  ],
})
export class AuthorsModule {}
