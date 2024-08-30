import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { TherapistService } from './services/therapist.service';
import { TherapistController } from './controllers/therapist.controller';
import { AuthenticationController } from './controllers/authentication.controller';
import { Customer } from './entities/customer.entity';
import { Therapist } from './entities/therapist.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './jwt.constant';
import { AdminController } from './controllers/admin.controller';
import { AdminService } from './services/admin.service';
import { RolService } from './services/rol.service';
import { RolController } from './controllers/rol.controller';
import { Admin } from './entities/admin.entity';
import { Rol } from './entities/rol.entity';
import { PersonController } from './controllers/person.controller';
import { PersonService } from './services/person.service';
import { Person } from './entities/person.entity';
import { MembershipsModule } from 'src/memberships/memberships.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, Therapist, Admin, Rol, Person]),
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '6h' },
    }),
    MembershipsModule,
  ],
  controllers: [
    CustomersController,
    TherapistController,
    AuthenticationController,
    AdminController,
    RolController,
    PersonController,
  ],
  providers: [
    CustomersService,
    TherapistService,
    AdminService,
    RolService,
    PersonService,
  ],
  exports: [],
})
export class UsersModule {}
