import { DataSource } from 'typeorm';
import { User } from '../models/User';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'wheelhub.db',
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});

export const initDb = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Connected to DB');
  } catch (err) {
    console.log('Error during DataSource init', err);
  }
};
