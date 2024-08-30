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
import { PersonService } from '../services/person.service';
import { CreatePersonDto, UpdatePersonDto } from '../dtos/person.dtos';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}
  @Get('')
  getAll() {
    return this.personService.findAll();
  }

  @Get(':personId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneById(@Param('personId') personId: string) {
    return this.personService.findOne(personId);
  }

  @Post('')
  create(@Body() payload: CreatePersonDto) {
    return this.personService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdatePersonDto) {
    return this.personService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.personService.softRemove(id);
  }
}
