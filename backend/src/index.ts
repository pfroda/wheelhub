import express, { Express } from 'express';
import router from './routes/userRoutes';
import cors from 'cors';
import { initDb } from './db/db';
import 'dotenv/config';

const app: Express = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

(async (): Promise<void> => {
  await initDb();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
