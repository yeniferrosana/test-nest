import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  title: string;

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

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
}
