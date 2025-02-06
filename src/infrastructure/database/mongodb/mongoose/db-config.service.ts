import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

@Injectable()
export class DbMongooseConfigService {
  private readonly mongoUri: string;
  constructor() {
    this.mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';
  }

  public createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    return {
      uri: this.mongoUri,
      retryWrites: true,
      ignoreUndefined: true,
    };
  }
}
