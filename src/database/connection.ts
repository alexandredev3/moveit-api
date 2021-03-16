import mongoose from 'mongoose';

import { config } from '../config';

const databaseConnection = mongoose.connect(config.database.mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export { databaseConnection };
