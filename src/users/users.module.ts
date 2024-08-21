import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { TherapistService } from './services/therapist.service';
import { TherapistController } from './controllers/therapist.controller';

@Module({
  controllers: [CustomersController, TherapistController],
  providers: [CustomersService, TherapistService],
})
export class UsersModule {}
