import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Membership } from './entities/membership.entities';
import { MembershipsController } from './controllers/membership.controller';
import { MembershipService } from './services/memberships.service';
import { UserMembershipController } from './controllers/user-membership.controller';
import { UserMembershipService } from './services/user-membership.service';
import { UserMembership } from './entities/user-membership.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Membership, UserMembership])],
  controllers: [MembershipsController, UserMembershipController],
  providers: [MembershipService, UserMembershipService],
  exports: [UserMembershipService],
})
export class MembershipsModule {}
