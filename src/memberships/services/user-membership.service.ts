import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateUserMembershipDto } from '../dtos/userMembership.dto';
import { UserMembership } from '../entities/user-membership.entity';

@Injectable()
export class UserMembershipService {
  constructor(
    @InjectRepository(UserMembership)
    private userMembershipRepo: Repository<UserMembership>,
  ) {}

  create(payload: CreateUserMembershipDto) {
    const newMembership = this.userMembershipRepo.create(payload);
    return this.userMembershipRepo.save(newMembership);
  }
}
