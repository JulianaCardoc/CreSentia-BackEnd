import { Module } from '@nestjs/common';
import { MembershipsController } from './controllers/membership.controller';
import { MembershipService } from './services/memberships.service';
import { Membership } from './entities/membership.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMembershipController } from './controllers/user-membership.controller';
import { UserMembershipService } from './services/user-membership.service';

@Module({
  imports: [TypeOrmModule.forFeature([Membership])],
  controllers: [MembershipsController, UserMembershipController],
  providers: [MembershipService, UserMembershipService],
})
export class MembershipsModule {}
