import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  NONE = 'none',
  PENDING = 'pending',
  APPROVE = 'approve',
  REJECTED = 'rejected',
}
@Entity('documentations')
export class Documentation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: true,
  })
  documents: string;

  @Column('enum', {
    enum: Status,
    default: Status.NONE,
  })
  status: string;
}
