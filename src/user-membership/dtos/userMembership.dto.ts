import { IsNumber, IsDate, IsNotEmpty, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserMembershipDto {
  readonly id: number;

  @IsNumber()
  @IsNotEmpty()
  readonly completed_appointments: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly is_active: boolean;

  @IsDate()
  @IsNotEmpty()
  readonly start_date: Date;

  @IsDate()
  @IsNotEmpty()
  readonly due_date: Date;
}

export class UpdateUserMembershipDto extends PartialType(
  CreateUserMembershipDto,
) {}
