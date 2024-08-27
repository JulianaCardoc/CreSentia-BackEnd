import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSellDto {
  @IsNotEmpty()
  @IsNumber()
  readonly total: number;
  @IsNotEmpty()
  @IsString()
  readonly status: string;
  @IsNotEmpty()
  readonly date: string;
  @IsNotEmpty()
  readonly due_date: string;
}

export class UpdateSellDto extends PartialType(CreateSellDto) {}
