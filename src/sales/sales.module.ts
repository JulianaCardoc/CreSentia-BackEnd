import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sell } from './entities/sell.entity';
import { SellController } from './controllers/sell.controller';
import { SellService } from './services/sell.service';
import { MembershipsModule } from 'src/memberships/memberships.module';

@Module({
  imports: [TypeOrmModule.forFeature([Sell]), MembershipsModule],
  controllers: [SellController],
  providers: [SellService],
})
export class SalesModule {}
