import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateSellDto, UpdateSellDto } from '../dtos/sells.dtos';
import { SellService } from '../services/sell.service';

@Controller('sell')
export class SellController {
  constructor(private sellsService: SellService) {}
  @Get('')
  getAll(@Query('limit') limit?, @Query('offset') offset?) {
    return this.sellsService.findAll(limit, offset);
  }

  @Get(':sellId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneById(@Param('sellId', ParseIntPipe) sellId: number) {
    return this.sellsService.findOne(sellId);
  }

  @Post('')
  create(@Body() payload: CreateSellDto) {
    return this.sellsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateSellDto) {
    return this.sellsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.sellsService.remove(+id);
  }
}
