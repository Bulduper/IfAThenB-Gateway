import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Action } from 'src/action/schemas/action.schema';

/*eslint-disable indent*/
@Schema()
export class Trigger {
  @Prop()
  name: string;

  @Prop({ enum: ['HTTP', 'CRON'] })
  type: string;

  @Prop({ type: MongooseSchema.Types.Mixed })
  properties: any;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Action' }] })
  actions: Action[];

  @Prop()
  enabled: boolean;
}

export const TriggerSchema = SchemaFactory.createForClass(Trigger);
