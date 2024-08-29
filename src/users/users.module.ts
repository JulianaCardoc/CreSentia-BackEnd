import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { TherapistService } from './services/therapist.service';
import { TherapistController } from './controllers/therapist.controller';
import { Customer } from './entities/customer.entity';
import { Therapist } from './entities/therapist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Therapist])],
  controllers: [CustomersController, TherapistController],
  providers: [CustomersService, TherapistService],
})
export class UsersModule {}
