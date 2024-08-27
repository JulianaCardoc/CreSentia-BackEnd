import { Injectable, NotFoundException } from '@nestjs/common';
import { UserMembership } from '../entities/userMembership.entity';
import {
  CreateUserMembershipDto,
  UpdateUserMembershipDto,
} from '../dtos/userMembership.dto';

@Injectable()
export class UserMembershipService {
  private counterId = 1;
  private userMemberships: UserMembership[] = [
    {
      id: 1,
      completed_appointments: 1,
      is_active: true,
      start_date: new Date(),
      due_date: new Date(),
    },
  ];
  findAll() {
    return this.userMemberships;
  }

  findOne(id: number) {
    const getOne = this.userMemberships.find((item) => item.id === +id);
    if (!getOne) {
      throw new NotFoundException(`Cannot find ${id}`);
    }
    return getOne;
  }

  create(payload: CreateUserMembershipDto) {
    this.counterId += 1;
    const newUserMembership = {
      id: this.counterId,
      ...payload,
    };
    return newUserMembership;
  }

  update(id: number, payload: UpdateUserMembershipDto) {
    const getUserMembership = this.findOne(id);
    if (getUserMembership) {
      const index = this.userMemberships.findIndex((item) => item.id === id);
      this.userMemberships[index] = {
        ...getUserMembership,
        ...payload,
      };
      return getUserMembership;
    }
    return null;
  }

  remove(id: number) {
    const index = this.userMemberships.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cannot find ${id}`);
    }
    this.userMemberships.splice(index, 1);
    return true;
  }
}
