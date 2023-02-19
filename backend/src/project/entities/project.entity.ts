import { BankAccount } from 'src/bank-account/entities/bank-account.entity';
import { Blog } from 'src/blog/entities/blog.entity';
import { Donation } from 'src/donation/entities/donation.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import { PaymentLink } from 'src/payment-link/entities/payment-link-entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  name: string;

  @Column('text', {
    nullable: false,
  })
  resume: string;

  @Column('text', {
    nullable: false,
  })
  description: string;

  @Column('text', {
    nullable: false,
  })
  img: string;

  @Column('float', {
    nullable: false,
  })
  goal: number;

  @Column('float', {
    default: 0,
  })
  accumulated: number;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @ManyToOne(() => Organization, (organization) => organization.projects)
  organization: Organization;

  @OneToMany(() => Blog, (blog) => blog.project)
  blogs: Blog[];

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.project)
  bankAccounts: BankAccount[];

  @OneToMany(() => PaymentLink, (paymentLink) => paymentLink.project)
  paymentLinks: PaymentLink[];

  @OneToMany(() => Donation, (donation) => donation.project)
  donations: Donation[];
}
