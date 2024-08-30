import {
  Injectable,
  NotFoundException,
  Inject,
  HttpException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
  LoginCustomerDto,
} from 'src/users/dtos/customers.dtos';
import { Customer } from 'src/users/entities/customer.entity';
import { Client } from 'pg';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PersonService } from './person.service';
import { RolService } from './rol.service';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('PG') private clientPg: Client,
    private configService: ConfigService,
    @InjectRepository(Customer) private productRepo: Repository<Customer>,
    private jwtService: JwtService,
    private personService: PersonService,
    private rolService:RolService,
  ) {}

  findAll(limit?: number, offset?: number) {
    console.log(limit, offset);
    return this.productRepo.find({
      relations: ['person'],
    });
  }

  async findOne(id: string) {
    const customer = await this.productRepo.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  async create(payload: CreateCustomerDto) {
    const { password } = payload;
    const hashpassword = await bcrypt.hash(password, 10);
    const newCustomer = this.productRepo.create({
      email: payload.email,
      password: hashpassword,
      nickname: payload.nickname,
    });
    if (payload.personId) {
      const person = await this.personService.findOne(payload.personId);
      newCustomer.person = person;
    }
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

  async login(payload: LoginCustomerDto) {
    const { email, password } = payload;
    const findCustomer = await this.productRepo.findOneBy({ email });
    console.log(findCustomer);
    if (!findCustomer) throw new HttpException('Usuario_No_Encontrado', 404);
    const checkPassword = await bcrypt.compare(password, findCustomer.password);
    if (!checkPassword) throw new HttpException('Contraseña_Invalida', 403);
    const token = this.jwtService.sign(payload);
    const data = {
      customer: findCustomer,
      token,
    };
    return data;
  }
}
