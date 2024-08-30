import { Injectable, NotFoundException } from '@nestjs/common';
import { Therapist } from '../entities/therapist.entity';
import {
  CreateTherapistDto,
  UpdateTherapistDto,
} from '../dtos/therapists.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { PersonService } from '../services/person.service';

@Injectable()
export class TherapistService {
  constructor(
    @InjectRepository(Therapist) private therapistRepo: Repository<Therapist>,
    private personService: PersonService,
  ) {}

  findAll(limit?: number, offset?: number) {
    console.log(limit, offset);
    return this.therapistRepo.find({
      relations: ['person'],
    });
  }

  async findOne(id: string) {
    const therapist = await this.therapistRepo.findOneBy({ id });
    if (!therapist) {
      throw new NotFoundException(`Therapist #${id} not found`);
    }
    return therapist;
  }

  async create(payload: CreateTherapistDto) {
    const newTherapist = this.therapistRepo.create(payload);
    if (payload.personId) {
      const person = await this.personService.findOne(payload.personId);
      newTherapist.person = person;
    }
    return this.therapistRepo.save(newTherapist);
  }

  async update(id: string, payload: UpdateTherapistDto) {
    const therapist = await this.therapistRepo.findOneBy({ id });
    this.therapistRepo.merge(therapist, payload);
    return this.therapistRepo.save(therapist);
  }

  async remove(id: string) {
    if (!id) {
      throw new NotFoundException(`Therapist #${id} not found`);
    }
    const res: DeleteResult = await this.therapistRepo.delete(id);
    if (res.affected > 0) {
      return `Therapist deleted successfully`;
    }
  }

  async softRemove(id: string) {
    if (!id) {
      throw new NotFoundException(`Therapist #${id} not found`);
    }
    const res: DeleteResult = await this.therapistRepo.softDelete(id);
    if (res.affected > 0) {
      return `Therapist deleted successfully`;
    }
  }
}
