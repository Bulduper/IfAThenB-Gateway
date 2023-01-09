import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTriggerDto } from './dto/create-trigger.dto';
import { Trigger } from './schema/trigger.schema';

@Injectable()
export class TriggerService {
  constructor(
    @InjectModel(Trigger.name) private triggerModel: Model<Trigger>,
  ) {}

  async create(createTriggerDto: CreateTriggerDto): Promise<Trigger> {
    const createdTrigger = new this.triggerModel(createTriggerDto);
    return createdTrigger.save();
  }

  async findAll(): Promise<Trigger[]> {
    return this.triggerModel.find().exec();
  }

  async find(name: string): Promise<Trigger> {
    return this.triggerModel.findOne({ name: name }).exec();
  }
}
