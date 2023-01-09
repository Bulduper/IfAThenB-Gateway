import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActionController } from './action.controller';
import { ActionService } from './action.service';
import { Action, ActionSchema } from './schemas/action.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Action.name, schema: ActionSchema }]),
  ],
  controllers: [ActionController],
  providers: [ActionService],
})
export class ActionModule {}
