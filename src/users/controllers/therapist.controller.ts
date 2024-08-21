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
import {
  CreateTherapistDto,
  UpdateTherapistDto,
} from '../dtos/therapists.dtos';
import { TherapistService } from '../services/therapist.service';

@Controller('therapists')
export class TherapistController {
  constructor(private therapistsService: TherapistService) {}
  @Get('')
  getAll(@Query('limit') limit?, @Query('offset') offset?) {
    return this.therapistsService.findAll(limit, offset);
  }

  @Get(':therapistId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneById(@Param('therapistId', ParseIntPipe) therapistId: number) {
    return this.therapistsService.findOne(therapistId);
  }

  @Post('')
  create(@Body() payload: CreateTherapistDto) {
    return this.therapistsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateTherapistDto) {
    return this.therapistsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.therapistsService.remove(+id);
  }
}
