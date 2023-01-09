import { Action } from 'src/action/schemas/action.schema';

enum TriggerType {
  Http = 'HTTP',
  Mqtt = 'MQTT',
  DateTime = 'DateTime',
  CronTask = 'CRON',
}

export class CreateTriggerDto {
  name: string;
  type: TriggerType;
  properties: any;
  actions: Action[];
}
