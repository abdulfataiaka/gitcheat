/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seeders from './seeders';

dotenv.config();

const {
  NODE_ENV,
  MONGO_URI,
  MONGO_URI_TEST
} = process.env;

const DBURI = NODE_ENV === 'test'
  ? MONGO_URI_TEST
  : MONGO_URI;

const connect = (done) => {
  console.log('\n[*] Starting to connect to mongodb database');

  mongoose.connect(DBURI, { useNewUrlParser: true }, (error) => {
    if (error) {
      console.log('[!] Error occured while connecting to mongodb');
      done(error);
    } else {
      console.log('[*] Connected to mongodb successful');
      mongoose.connection.db.dropDatabase();
      seeders(() => { done(null); });
    }
  });
};

export default { connect };
