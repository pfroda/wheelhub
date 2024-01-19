import express from 'express';
import router from './routes/userRoutes';
import { initDb } from './db/db';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

(async () => {
  await initDb();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
