import { Documentation } from 'src/documentation/entities/documentation.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

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
  
   @Column('text', {
    array: true,
    default: ['user'],
  })
  roles: string[];

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }

  @OneToOne(() => Documentation, (documentation) => documentation.admin) // specify inverse side as a second parameter
  documentation: Documentation;

  @OneToMany(() => Organization, (organization) => organization.owner)
  organizations: Organization[];
}
