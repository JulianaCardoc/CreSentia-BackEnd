import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';
import { MembershipsModule } from './memberships/memberships.module';
import { UserMembershipController } from './user-membership/controllers/userMembership.controller';
import { UserMembershipService } from './user-membership/services/userMembership.service';
import { UserMembershipModule } from './user-membership/module/module.module';

@Module({
  imports: [UsersModule, SalesModule, MembershipsModule, UserMembershipModule],
  controllers: [AppController, UserMembershipController],
  providers: [AppService, UserMembershipService],
})
export class AppModule {}
