import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateRolDto, UpdateRolDto } from '../dtos/rol.dtos';
import { Rol } from '../entities/rol.entity';

@Injectable()
export class RolService {
  constructor(@InjectRepository(Rol) private rolRepo: Repository<Rol>) {}

  findAll() {
    return this.rolRepo.find();
  }

  async findOne(id: string) {
    const rol = await this.rolRepo.findOneBy({ id });
    if (!rol) {
      throw new NotFoundException(`Rol #${id} not found`);
    }
    return rol;
  }

  create(payload: CreateRolDto) {
    const newRol = this.rolRepo.create(payload);
    return this.rolRepo.save(newRol);
  }

  async update(id: string, payload: UpdateRolDto) {
    const rol = await this.rolRepo.findOneBy({ id });
    this.rolRepo.merge(rol, payload);
    return this.rolRepo.save(rol);
  }

  async remove(id: string) {
    if (!id) {
      throw new NotFoundException(`Rol #${id} not found`);
    }
    const res: DeleteResult = await this.rolRepo.delete(id);
    if (res.affected > 0) {
      return `Rol deleted successfully`;
    }
  }

  async softRemove(id: string) {
    if (!id) {
      throw new NotFoundException(`Rol #${id} not found`);
    }
    const res: DeleteResult = await this.rolRepo.softDelete(id);
    if (res.affected > 0) {
      return `Rol deleted successfully`;
    }
  }
}
