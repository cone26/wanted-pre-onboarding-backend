import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  company_id: number;

  @Column()
  company_name: string;

  @Column()
  country: string;

  @Column()
  location: string;
}
