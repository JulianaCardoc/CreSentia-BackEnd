import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dtos';
import { CustomersService } from 'src/users/services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get('')
  getAll(@Query('limit') limit?, @Query('offset') offset?) {
    return this.customersService.findAll(limit, offset);
  }

  @Get(':customerId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneById(@Param('customerId') customerId: string) {
    return this.customersService.findOne(customerId);
  }

  @Post('')
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
