import express from 'express';
import cors from 'cors';

import { config } from './config';
import { routes } from './routes';

import './database/connection';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || config.server.port, () => {
  return console.log('Server is Running...');
});