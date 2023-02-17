import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bankAccounts')
export class BankAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  bank: string;

  @Column('text', {
    nullable: false,
  })
  CVU: string;

  @Column('text', {
    nullable: false,
  })
  alias: string;
}
