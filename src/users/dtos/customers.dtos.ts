import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  readonly id: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nickname: string;

  @ApiProperty()
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  readonly personId: string;

  @ApiProperty()
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly rolId: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  readonly userMembershipId: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}

export class LoginCustomerDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
