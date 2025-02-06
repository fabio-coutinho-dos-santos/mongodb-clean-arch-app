import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'authors' })
export class AuthorsSchema {
  @Prop({ required: true })
  _id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  birth_year: number;
}

export type AuthorsDocument = HydratedDocument<AuthorsSchema>;
export const authorsSchema = SchemaFactory.createForClass(AuthorsSchema);
