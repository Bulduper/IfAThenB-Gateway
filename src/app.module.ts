import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriggerModule } from './trigger/trigger.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ActionModule } from './action/action.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TriggerModule,
    ActionModule,
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:27017`, {
      dbName: 'ifAthenB',
      pass: process.env.DB_PASSWORD,
      user: process.env.DB_USERNAME,
    }),
    ClientsModule.register([
      {
        name: 'LISTENER_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3001,
          host: process.env.LISTENER_HOST,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
