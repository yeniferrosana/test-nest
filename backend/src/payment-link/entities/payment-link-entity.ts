import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paymentLinks')
export class PaymentLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float', {
    nullable: false,
  })
  amount: number;

  @Column('text', {
    nullable: false,
  })
  reference: string;

  @Column('text', {
    nullable: false,
  })
  link: string;
}
