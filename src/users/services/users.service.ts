import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dtos';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'Charly',
      lastname: 'Correa',
      nickname: 'Chuck',
      sex: 'Male',
      email: 'ccorreamd@gmail.com',
      idNumber: 1053807541,
      eps: 'Sura',
      birthDate: '1991-01-04',
      country: 'Colombia',
      city: 'Manizales',
      family_rol: 'Amo de casa',
    },
  ];

  findAll(limit?: number, offset?: number) {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === +id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  async update(id: number, payload: UpdateUserDto) {
    const user = await this.findOne(id);
    if (user) {
      const index = this.users.findIndex((item) => item.id === id);
      this.users[index] = {
        ...user,
        ...payload,
      };
      return this.users[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}
