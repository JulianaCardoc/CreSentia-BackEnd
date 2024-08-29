import { Injectable, NotFoundException } from '@nestjs/common';
import { Membership } from '../entities/membership.entities';
import {
  CreateMembershipDto,
  UpdateMembershipDto,
} from '../dtos/memberships.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership) private membershiRepo: Repository<Membership>,
  ) {}

  findAll() {
    return this.membershiRepo.find();
  }

  async findOne(id: string) {
    const membership = await this.membershiRepo.findOneBy({ id });
    if (!membership) {
      throw new NotFoundException(`Membership #${id} not found`);
    }
    return membership;
  }

  create(payload: CreateMembershipDto) {
    const newMembership = this.membershiRepo.create(payload);
    return this.membershiRepo.save(newMembership);
  }

  async update(id: string, payload: UpdateMembershipDto) {
    const membership = await this.membershiRepo.findOneBy({ id });
    this.membershiRepo.merge(membership, payload);
    return this.membershiRepo.save(membership);
  }

  async remove(id: string) {
    if (!id) {
      throw new NotFoundException(`Membership #${id} not found`);
    }
    const res: DeleteResult = await this.membershiRepo.delete(id);
    if (res.affected > 0) {
      return `Membership deleted successfully`;
    }
  }

  async softRemove(id: string) {
    if (!id) {
      throw new NotFoundException(`Membership #${id} not found`);
    }
    const res: DeleteResult = await this.membershiRepo.softDelete(id);
    if (res.affected > 0) {
      return `Membership deleted successfully`;
    }
  }
}
