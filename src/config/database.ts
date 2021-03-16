import { MONGODB_DB, MONGODB_URI } from '../utils/environment';

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI environment variable inside .env.local')
}

const database = {
  mongo_uri: String(MONGODB_URI),
  mongo_db: String(MONGODB_DB)
};

export { database };