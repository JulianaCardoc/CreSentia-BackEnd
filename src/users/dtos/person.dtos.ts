import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDto {
  readonly id: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly phone: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly sex: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly identification: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly eps: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  readonly birthDate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly country: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly city: string;
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
