import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSellDto, UpdateSellDto } from '../dtos/sells.dtos';
import { Sell } from '../entities/sell.entity';

@Injectable()
export class SellService {
  private counterId = 1;
  private sell: Sell[] = [
    {
      id: 1,
      total: 1,
      status: 'yes',
      date: '2024 - 1 - 1',
      due_date: '2024-02-02',
    },
  ];

  findAll(limit?: number, offset?: number) {
    console.log(limit, offset);
    return this.sell;
  }

  findOne(id: number) {
    const sell = this.sell.find((item) => item.id === +id);
    if (!sell) {
      throw new NotFoundException(`Sell #${id} not found`);
    }
    return sell;
  }

  create(payload: CreateSellDto) {
    this.counterId = this.counterId + 1;
    const newSell = {
      id: this.counterId,
      ...payload,
    };
    this.sell.push(newSell);
    return newSell;
  }

  async update(id: number, payload: UpdateSellDto) {
    const sell = await this.findOne(id);
    if (sell) {
      const index = this.sell.findIndex((item) => item.id === id);
      this.sell[index] = {
        ...sell,
        ...payload,
      };
      return this.sell[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.sell.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Therapist #${id} not found`);
    }
    this.sell.splice(index, 1);
    return true;
  }
}
