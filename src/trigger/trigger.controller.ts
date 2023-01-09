import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTriggerDto } from './dto/create-trigger.dto';
import { Trigger } from './schema/trigger.schema';
import { TriggerService } from './trigger.service';

@Controller('trigger')
export class TriggerController {
  constructor(private triggerService: TriggerService) {}
  @Get()
  async findAll(): Promise<Trigger[]> {
    return this.triggerService.findAll();
  }

  @Get(':triggerName')
  async find(@Param() triggerParams: any): Promise<Trigger> {
    return this.triggerService.find(triggerParams.triggerName);
  }

  @Post()
  async create(@Body() createTriggerDto: CreateTriggerDto): Promise<Trigger> {
    return this.triggerService.create(createTriggerDto);
  }
}
