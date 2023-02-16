import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('organizations')
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  name: string;

  @Column('text', {
    nullable: false,
  })
  email: string;

  @Column('bool', {
    default: false,
  })
  registered: boolean;
}
