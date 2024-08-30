import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import {
  CreateCustomerDto,
  LoginCustomerDto,
} from 'src/users/dtos/customers.dtos';

@Controller('auth')
export class AuthenticationController {
  constructor(private customersService: CustomersService) {}
  @Post('register')
  register(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @UseGuards()
  @Post('login')
  login(@Body() payload: LoginCustomerDto) {
    return this.customersService.login(payload);
  }
}
