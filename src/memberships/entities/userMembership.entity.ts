import { Customer } from 'src/users/entities/customer.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Membership } from './membership.entities';

@Entity()
export class UserMembership {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    name: 'completed_appointments',
    nullable: false,
  })
  completedAppointments: number;

  @Column({
    type: 'boolean',
    name: 'is_active',
    nullable: false,
  })
  isActive: boolean;

  @Column({
    type: 'timestamptz',
    name: 'start_date',
    nullable: false,
  })
  startDate: Date;

  @Column({
    type: 'timestamptz',
    name: 'due_date',
    nullable: true,
  })
  dueDate: Date;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamptz',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt: Date;

  @ManyToOne(() => Customer, (customer) => customer.userMemberships)
  customer: Customer;

  @ManyToOne(() => Membership, (membership) => membership.userMemberships)
  membership: Membership;
}
