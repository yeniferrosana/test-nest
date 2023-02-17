import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
