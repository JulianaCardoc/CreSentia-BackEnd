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
import { AdminService } from '../services/admin.service';
import { CreateAdminDto, UpdateAdminDto } from '../dtos/admin.dtos';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @Get('')
  getAll() {
    return this.adminService.findAll();
  }

  @Get(':adminId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneById(@Param('adminId') adminId: string) {
    return this.adminService.findOne(adminId);
  }

  @Post('')
  create(@Body() payload: CreateAdminDto) {
    return this.adminService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateAdminDto) {
    return this.adminService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.adminService.softRemove(id);
  }
}
