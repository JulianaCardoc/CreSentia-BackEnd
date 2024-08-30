import { Injectable, NotFoundException } from '@nestjs/common';
import { Person } from '../entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreatePersonDto, UpdatePersonDto } from '../dtos/person.dtos';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}

  findAll() {
    return this.personRepo.find();
  }

  async findOne(id: string) {
    const person = await this.personRepo.findOneBy({ id });
    if (!person) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return person;
  }

  create(payload: CreatePersonDto) {
    const newPerson = this.personRepo.create(payload);
    return this.personRepo.save(newPerson);
  }

  async update(id: string, payload: UpdatePersonDto) {
    const person = await this.personRepo.findOneBy({ id });
    this.personRepo.merge(person, payload);
    return this.personRepo.save(person);
  }

  async remove(id: string) {
    if (!id) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    const res: DeleteResult = await this.personRepo.delete(id);
    if (res.affected > 0) {
      return `Person deleted successfully`;
    }
  }

  async softRemove(id: string) {
    const exist = await this.personRepo.findOneBy({ id });
    if (!exist) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    const res: DeleteResult = await this.personRepo.softDelete(id);
    if (res.affected > 0) {
      return `Person deleted successfully`;
    }
  }
}
