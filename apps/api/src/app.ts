import express, { Application } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import authRouter from './routers/authRouter';

import cors from 'cors';

dotenv.config({
  path: path.resolve(process.cwd(), '.env.development'),
});
const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true, // Enable credentials (if needed)
  }),
);

app.use(express.json());
app.use('/api/auth', authRouter);

app.use(express.json());
app.listen(PORT, () => console.log('Listening on port ' + PORT));
