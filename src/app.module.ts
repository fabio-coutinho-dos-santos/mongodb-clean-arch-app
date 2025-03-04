import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsModule } from './application/authors/authors.module';
import { UsersModule } from './application/users/users.model';
import { BooksModule } from './application/books/books.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: false,
      ignoreEnvVars: false,
      cache: true,
      expandVariables: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://admin:pass@localhost:27017/aggree',
    ),
    AuthorsModule,
    UsersModule,
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
