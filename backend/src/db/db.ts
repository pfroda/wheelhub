import { DataSource } from 'typeorm';
import { User } from '../models/User';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'src/db/wheelhub.db',
  synchronize: true,
  logging: true,
  entities: [User],
});

export const initDb = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Connected to DB');
  } catch (err) {
    console.log('Error during DataSource init', err);
  }
};
