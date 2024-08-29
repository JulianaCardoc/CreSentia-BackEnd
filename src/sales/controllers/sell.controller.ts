import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSellDto, UpdateSellDto } from '../dtos/sells.dtos';
import { SellService } from '../services/sell.service';

@Controller('sell')
export class SellController {
  constructor(private sellsService: SellService) {}
  @Get('')
  getAll() {
    return this.sellsService.findAll();
  }

  @Get(':sellId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneById(@Param('sellId') sellId: string) {
    return this.sellsService.findOne(sellId);
  }

  @Post('')
  create(@Body() payload: CreateSellDto) {
    return this.sellsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateSellDto) {
    return this.sellsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sellsService.remove(id);
  }
}
