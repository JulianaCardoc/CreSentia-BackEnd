import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { TherapistService } from './services/therapist.service';
import { TherapistController } from './controllers/therapist.controller';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomersController, TherapistController],
  providers: [CustomersService, TherapistService],
})
export class UsersModule {}
