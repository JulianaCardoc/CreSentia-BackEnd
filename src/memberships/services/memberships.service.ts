import { Injectable, NotFoundException } from '@nestjs/common';
import { Membership } from '../entities/membership.entities';
import {
  CreateMembershipDto,
  UpdateMembershipDto,
} from '../dtos/memberships.dtos';

@Injectable()
export class MembershipService {
  private counterId = 1;
  private memberships: Membership[] = [
    {
      id: 1,
      name: 'Membership1',
      description: 'First membership',
      price: 200000,
      sessions: 3,
    },
  ];

  findAll() {
    return this.memberships;
  }

  findOne(id: number) {
    const membership = this.memberships.find((item) => item.id === +id);
    if (!membership) {
      throw new NotFoundException(`Cannot find ${id}`);
    }
    return membership;
  }

  create(payload: CreateMembershipDto) {
    this.counterId += 1;
    const newMembership = {
      id: this.counterId,
      ...payload,
    };
    this.memberships.push(newMembership);
    return newMembership;
  }

  async update(id: number, payload: UpdateMembershipDto) {
    const getMembership = await this.findOne(id);
    if (getMembership) {
      const index = this.memberships.findIndex((item) => item.id === id);
      this.memberships[index] = {
        ...getMembership,
        ...payload,
      };
      return this.memberships[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.memberships.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cannot find ${id}`);
    }
    this.memberships.splice(index, 1);
    return true;
  }
}
