import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSellDto {
  readonly id: string;
  @IsNotEmpty()
  @IsNumber()
  readonly total: number;
  @IsNotEmpty()
  @IsString()
  readonly status: string;
}

export class UpdateSellDto extends PartialType(CreateSellDto) {}
