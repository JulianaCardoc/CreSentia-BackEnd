import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { TherapistService } from './services/therapist.service';
import { TherapistController } from './controllers/therapist.controller';
import { AuthenticationController } from './controllers/authentication.controller';
import { Customer } from './entities/customer.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './jwt.constant';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '6h' },
    }),
  ],
  controllers: [
    CustomersController,
    TherapistController,
    AuthenticationController,
  ],
  providers: [CustomersService, TherapistService],
})
export class UsersModule {}
