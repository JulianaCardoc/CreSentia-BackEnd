import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSellDto, UpdateSellDto } from '../dtos/sells.dtos';
import { Sell } from '../entities/sell.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { UserMembershipService } from 'src/memberships/services/user-membership.service';

@Injectable()
export class SellService {
  constructor(
    @InjectRepository(Sell) private saleRepo: Repository<Sell>,
    private userMembershipService: UserMembershipService,
  ) {}

  findAll() {
    return this.saleRepo.find();
  }

  async findOne(id: string) {
    const sale = await this.saleRepo.findOneBy({ id });
    if (!sale) {
      throw new NotFoundException(`Sale #${id} not found`);
    }
    return sale;
  }

  create(payload: CreateSellDto) {
    const newSale = this.saleRepo.create(payload);
    const newMembership = {
      completed_appointments: 0,
      is_active: true,
      start_date: new Date(),
      due_date: new Date(),
    };
    this.userMembershipService.create(newMembership);
    return this.saleRepo.save(newSale);
  }

  async update(id: string, payload: UpdateSellDto) {
    const sale = await this.saleRepo.findOneBy({ id });
    this.saleRepo.merge(sale, payload);
    return this.saleRepo.save(sale);
  }

  async remove(id: string) {
    if (!id) {
      throw new NotFoundException(`Sale #${id} not found`);
    }
    const res: DeleteResult = await this.saleRepo.delete(id);
    if (res.affected > 0) {
      return `Sale deleted successfully`;
    }
  }

  async softRemove(id: string) {
    if (!id) {
      throw new NotFoundException(`Sale #${id} not found`);
    }
    const res: DeleteResult = await this.saleRepo.softDelete(id);
    if (res.affected > 0) {
      return `Sale deleted successfully`;
    }
  }
}
