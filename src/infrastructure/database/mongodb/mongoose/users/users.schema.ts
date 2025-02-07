import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class TagsModel {
  @Prop({ type: [String] })
  tags: string[];
}

export class LocationModel {
  @Prop({ type: String })
  country: string;

  @Prop({ type: String })
  address: string;
}

export class CompanyModel {
  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  phone: string;

  @Prop({ type: LocationModel })
  location: LocationModel;
}

@Schema({ collection: 'users' })
export class UsersModel {
  @Prop({ type: Number })
  index: number;

  @Prop({ type: String })
  name: string;

  @Prop({ type: Boolean })
  isActive: boolean;

  @Prop({ type: Date })
  registered: Date;

  @Prop({ type: Number })
  age: number;

  @Prop({ type: String })
  gender: string;

  @Prop({ type: String })
  eyeColor: string;

  @Prop({ type: String })
  favoriteFruit: string;

  @Prop({ type: CompanyModel })
  company: CompanyModel;

  @Prop({ type: TagsModel })
  tags: TagsModel;
}

export type UsersDocument = HydratedDocument<UsersModel>;
export const UsersSchema = SchemaFactory.createForClass(UsersModel);
