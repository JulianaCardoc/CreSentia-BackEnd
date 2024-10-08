import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { MembershipService } from '../services/memberships.service';
import {
  CreateMembershipDto,
  UpdateMembershipDto,
} from '../dtos/memberships.dtos';

@Controller('memberships')
export class MembershipsController {
  constructor(private membershipService: MembershipService) {}

  @Get('')
  findMemberships() {
    return this.membershipService.findAll();
  }

  @Get(':id')
  findOneMembership(@Param('id') id: string) {
    return this.membershipService.findOne(id);
  }

  @Post('')
  createMembership(@Body() payload: CreateMembershipDto) {
    return this.membershipService.create(payload);
  }

  @Put(':id')
  updateMembership(
    @Param('id') id: string,
    @Body() payload: UpdateMembershipDto,
  ) {
    return this.membershipService.update(id, payload);
  }

  @Delete(':id')
  deleteMembership(@Param('id') id: string) {
    return this.membershipService.remove(id);
  }
}
