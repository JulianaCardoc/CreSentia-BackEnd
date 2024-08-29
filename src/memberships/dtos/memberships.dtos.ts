import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMembershipDto {
  readonly id: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly sessions: number;
}

export class UpdateMembershipDto extends PartialType(CreateMembershipDto) {}
