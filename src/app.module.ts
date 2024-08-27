import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';
import { MembershipsModule } from './memberships/memberships.module';
import { UserMembershipController } from './user-membership/controllers/userMembership.controller';
import { UserMembershipService } from './user-membership/services/userMembership.service';
import { UserMembershipModule } from './user-membership/module/module.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { environments } from './environments';
import config from './config';

@Module({
  imports: [UsersModule, SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
