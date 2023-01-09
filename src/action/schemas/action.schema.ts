import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

// export type CatDocument = Cat & Document;
/* eslint-disable indent */
@Schema()
export class Action {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop({ type: MongooseSchema.Types.Mixed })
  properties: any;

  @Prop()
  enabled: boolean;
}

export const ActionSchema = SchemaFactory.createForClass(Action);
