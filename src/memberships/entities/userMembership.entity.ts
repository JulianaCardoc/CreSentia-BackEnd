import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
