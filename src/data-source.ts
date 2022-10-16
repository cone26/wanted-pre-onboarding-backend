import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'jobs1234',
  database: 'jobs',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
