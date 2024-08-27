import { Module } from '@nestjs/common';
import { UserMembershipController } from '../controllers/userMembership.controller';
import { UserMembershipService } from '../services/userMembership.service';

@Module({
  controllers: [UserMembershipController],
  providers: [UserMembershipService],
})
export class UserMembershipModule {}
