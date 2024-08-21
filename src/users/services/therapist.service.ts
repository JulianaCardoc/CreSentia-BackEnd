import { Injectable, NotFoundException } from '@nestjs/common';
import { Therapist } from '../entities/therapist.entity';
import {
  CreateTherapistDto,
  UpdateTherapistDto,
} from '../dtos/therapists.dtos';

@Injectable()
export class TherapistService {
  private counterId = 1;
  private therapists: Therapist[] = [
    {
      id: 1,
      email: 'correa@gmail.com',
      password: '100992831ww2',
      profession: 'psychologist',
      specialty: 'nose',
    },
  ];

  findAll(limit?: number, offset?: number) {
    console.log(limit, offset);
    return this.therapists;
  }

  findOne(id: number) {
    const therapist = this.therapists.find((item) => item.id === +id);
    if (!therapist) {
      throw new NotFoundException(`Therapist #${id} not found`);
    }
    return therapist;
  }

  create(payload: CreateTherapistDto) {
    this.counterId = this.counterId + 1;
    const newTherapist = {
      id: this.counterId,
      ...payload,
    };
    this.therapists.push(newTherapist);
    return newTherapist;
  }

  async update(id: number, payload: UpdateTherapistDto) {
    const therapist = await this.findOne(id);
    if (therapist) {
      const index = this.therapists.findIndex((item) => item.id === id);
      this.therapists[index] = {
        ...therapist,
        ...payload,
      };
      return this.therapists[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.therapists.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Therapist #${id} not found`);
    }
    this.therapists.splice(index, 1);
    return true;
  }
}
