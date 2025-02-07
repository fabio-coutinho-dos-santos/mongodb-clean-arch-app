import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ collection: 'books' })
export class BooksModel {
  @Prop({ type: Number })
  _id: number;

  @Prop({ type: String })
  title: string;

  @Prop({ type: Number })
  author_id: number;

  @Prop({ type: String })
  genre: string;
}

export type BooksDocument = BooksModel & Document;
export const BooksSchema = SchemaFactory.createForClass(BooksModel);
