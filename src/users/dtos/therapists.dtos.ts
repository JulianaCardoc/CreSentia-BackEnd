import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTherapistDto {
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
  readonly profession: string;
  @ApiProperty()
  @IsString()
  readonly specialty: string;
}

export class UpdateTherapistDto extends PartialType(CreateTherapistDto) {}
