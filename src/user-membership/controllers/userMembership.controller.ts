import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UserMembershipService } from '../services/userMembership.service';
import {
  CreateUserMembershipDto,
  UpdateUserMembershipDto,
} from '../dtos/userMembership.dto';

@Controller('usermembership')
export class UserMembershipController {
  constructor(private userMembershipService: UserMembershipService) {}
  @Get('')
  findUserMembership() {}

  @Get(':id')
  findUnique(@Param() id: number) {
    return this.userMembershipService.findOne(id);
  }

  @Post('')
  createUserMemberhsip(@Body() payload: CreateUserMembershipDto) {
    return this.userMembershipService.create(payload);
  }

  @Put(':id')
  updateUserMembership(
    @Param() id: number,
    @Body() payload: UpdateUserMembershipDto,
  ) {
    return this.userMembershipService.update(id, payload);
  }

  @Delete(':id')
  removeUserMembership(@Param() id: number) {
    return this.userMembershipService.remove(id);
  }
}
