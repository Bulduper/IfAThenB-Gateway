import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export type CatDocument = Cat & Document;
/* eslint-disable indent */
@Schema()
export class DateTimeTrigger {
  @Prop({ required: true })
  name: string;

  @Prop()
  repWeekdays: number[];

  @Prop({ default: Date.now })
  startTime: Date;

  @Prop()
  endTime: Date;

  @Prop({ required: true })
  repeat: boolean;

  @Prop({ min: 1, max: 4, default: 1 })
  repWeeks: number;
}

export const BehaviorSchema = SchemaFactory.createForClass(DateTimeTrigger);
