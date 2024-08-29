import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMembership } from '../entities/userMembership.entity';
import { Repository } from 'typeorm';
import { CreateUserMembershipDto } from '../dtos/userMembership.dto';

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
