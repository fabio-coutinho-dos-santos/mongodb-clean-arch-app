import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DbMongooseConfigService } from 'src/infrastructure/database/mongodb/mongoose/db-config.service';
import {
  UsersModel,
  UsersSchema,
} from 'src/infrastructure/database/mongodb/mongoose/users/users.schema';
import { UsersRepository } from 'src/infrastructure/database/mongodb/mongoose/users/users.repository';

@Module({
  imports: [
    MongooseModule.forRootAsync({ useClass: DbMongooseConfigService }),
    MongooseModule.forFeature([{ name: UsersModel.name, schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: 'IUsersRepository',
      useClass: UsersRepository,
    },
  ],
})
export class UsersModule {}
