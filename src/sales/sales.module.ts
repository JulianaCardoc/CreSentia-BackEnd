import { Module } from '@nestjs/common';
import { SellController } from './controllers/sell.controller';
import { SellService } from './services/sell.service';
import { Sell } from './entities/sell.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sell])],
  controllers: [SellController],
  providers: [SellService],
})
export class SalesModule {}
