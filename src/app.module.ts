import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { environments } from './environments';
import config from './config';
import { MembershipsModule } from './memberships/memberships.module';
import { UserMembershipModule } from './user-membership/module/module.module';
import { UserMembershipController } from './user-membership/controllers/userMembership.controller';
import { UserMembershipService } from './user-membership/services/userMembership.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule,
    UsersModule,
    SalesModule,
    DatabaseModule,
    MembershipsModule,
    UserMembershipModule,
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
  controllers: [AppController, UserMembershipController],
  providers: [AppService, UserMembershipService],
})
export class AppModule {}
