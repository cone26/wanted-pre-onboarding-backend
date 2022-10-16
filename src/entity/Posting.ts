import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './Company';

@Entity()
export class Posting {
  @PrimaryGeneratedColumn()
  posting_id: number;

  @Column()
  job_position: string;

  @Column()
  reward: number;

  @Column()
  skill: string;

  @OneToOne((type) => Company)
  @JoinColumn()
  company: Company;
}
