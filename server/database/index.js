/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seeders from './seeders';

dotenv.config();

const { MONGODB_URI } = process.env;

const connect = (done) => {
  console.log('\n[*] Starting to connect to mongodb database');

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (error) => {
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
