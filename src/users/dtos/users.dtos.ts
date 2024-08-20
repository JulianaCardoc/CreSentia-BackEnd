import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  readonly id: number;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;
  @IsString()
  @IsNotEmpty()
  readonly nickname: string;
  @IsString()
  @IsNotEmpty()
  readonly sex: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsNumber()
  readonly idNumber: number;
  @IsString()
  @IsNotEmpty()
  readonly eps: string;
  @IsString()
  @IsNotEmpty()
  readonly birthDate: string;
  @IsString()
  @IsNotEmpty()
  readonly country: string;
  @IsString()
  @IsNotEmpty()
  readonly city: string;
  @IsString()
  @IsNotEmpty()
  readonly family_rol: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
