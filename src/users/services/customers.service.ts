import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dtos';
import { Customer } from 'src/users/entities/customer.entity';
import { Client } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('PG') private clientPg: Client,
    private configService: ConfigService,
    @InjectRepository(Customer) private productRepo: Repository<Customer>,
  ) {}

  findAll(limit?: number, offset?: number) {
    console.log(limit, offset);
    return this.productRepo.find();
  }

  async findOne(id: string) {
    const customer = await this.productRepo.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    const newCustomer = this.productRepo.create(payload);
    return this.productRepo.save(newCustomer);
  }

  async update(id: string, payload: UpdateCustomerDto) {
    const customer = await this.productRepo.findOneBy({ id });
    this.productRepo.merge(customer, payload);
    return this.productRepo.save(customer);
  }

  remove(id: string) {
    return this.productRepo.delete(id);
  }
}
