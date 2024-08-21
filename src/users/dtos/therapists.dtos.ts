import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTherapistDto {
  readonly id: number;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  readonly profession: string;
  @IsString()
  @IsNotEmpty()
  readonly specialty: string;
}

export class UpdateTherapistDto extends PartialType(CreateTherapistDto) {}
