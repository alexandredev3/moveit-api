import { server } from './server';
import { database } from './database';

type IConfig = {
  server: {
    port: number;
  };
  database: {
    mongo_uri: string;
    mongo_db: string;
  };
}

const config: IConfig = {
  server,
  database,
};

export { config };