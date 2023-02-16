import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  first_name: string;

  @Column('text', {
    nullable: false,
  })
  last_name: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  user_name: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  email: string;

  @Column('text', {
    select: false,
    nullable: false,
  })
  password: string;

  @Column('bool', {
    default: false,
  })
  isAdmin: boolean;
}
