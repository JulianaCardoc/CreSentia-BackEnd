import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { environments } from './environments';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from './config';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';
import { DatabaseModule } from './database/database.module';
import { MembershipsModule } from './memberships/memberships.module';

@Module({
  imports: [
    TypeOrmModule,
    UsersModule,
    SalesModule,
    DatabaseModule,
    MembershipsModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
