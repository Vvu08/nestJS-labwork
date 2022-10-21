import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', length: 140 })
  title: string;

  @Column({ type: 'longtext', nullable: true })
  description: string;

  @Column({ default: false, name: 'active' })
  isActive: boolean;

  @Column({ type: 'datetime', default: new Date().toString() })
  createdAt: string;

  @Column({ type: 'datetime', nullable: true })
  updatedAt: string; // "2022.09.23 15:52:15"

  @Column({ type: 'datetime', nullable: true })
  deletedAt: string;
}