import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateActionDto } from './dto/create-action.dto';
import { Action } from './schemas/action.schema';

@Injectable()
export class ActionService {
  constructor(@InjectModel(Action.name) private actionModel: Model<Action>) {}

  async create(createActionDto: CreateActionDto): Promise<Action> {
    const createdAction = new this.actionModel(createActionDto);
    return createdAction.save();
  }

  async findAll(): Promise<Action[]> {
    return this.actionModel.find().exec();
  }

  async findById(id: any): Promise<Action> {
    // return this.actionModel.find().exec();
    return this.actionModel.findById(id).exec();
  }
}
