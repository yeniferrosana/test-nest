import { Documentation } from 'src/documentation/entities/documentation.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

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

  @OneToOne(() => Documentation, (documentation) => documentation.organization) // specify inverse side as a second parameter
  @JoinColumn()
  documentation: Documentation;
}
