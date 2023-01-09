import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActionService } from './action.service';
import { CreateActionDto } from './dto/create-action.dto';
import { Action } from './schemas/action.schema';

@Controller('action')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}
  @Get()
  async findAll(): Promise<Action[]> {
    return this.actionService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: any): Promise<Action> {
    return this.actionService.findById(id);
  }

  @Post()
  async createAction(
    @Body() createActionDto: CreateActionDto,
  ): Promise<Action> {
    return this.actionService.create(createActionDto);
  }
}
