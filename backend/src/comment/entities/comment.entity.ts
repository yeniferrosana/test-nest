import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  user_name: string;

  @Column('text', {
    nullable: false,
  })
  message: string;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;
}
