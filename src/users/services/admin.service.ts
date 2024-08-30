import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateAdminDto, UpdateAdminDto } from '../dtos/admin.dtos';
import { Admin } from '../entities/admin.entity';
import { PersonService } from './person.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
    private personService: PersonService,
  ) {}

  findAll() {
    return this.adminRepo.find({
      relations: ['person'],
    });
  }

  async findOne(id: string) {
    const admin = await this.adminRepo.findOneBy({ id });
    if (!admin) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
    return admin;
  }

  async create(payload: CreateAdminDto) {
    const newAdmin = this.adminRepo.create(payload);
    if (payload.personId) {
      const person = await this.personService.findOne(payload.personId);
      newAdmin.person = person;
    }
    return this.adminRepo.save(newAdmin);
  }

  async update(id: string, payload: UpdateAdminDto) {
    const admin = await this.adminRepo.findOneBy({ id });
    this.adminRepo.merge(admin, payload);
    return this.adminRepo.save(admin);
  }

  async remove(id: string) {
    if (!id) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
    const res: DeleteResult = await this.adminRepo.delete(id);
    if (res.affected > 0) {
      return `Admin deleted successfully`;
    }
  }

  async softRemove(id: string) {
    if (!id) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
    const res: DeleteResult = await this.adminRepo.softDelete(id);
    if (res.affected > 0) {
      return `Admin deleted successfully`;
    }
  }
}
