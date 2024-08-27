import { Module } from '@nestjs/common';
import { MembershipsController } from './controllers/membership.controller';
import { MembershipService } from './services/memberships.service';

@Module({
  controllers: [MembershipsController],
  providers: [MembershipService],
})
export class MembershipsModule {}
