/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seeders from './seeders';

dotenv.config();

const { MONGO_URI } = process.env;

const afterHook = () => {
  mongoose.connection.db.dropDatabase();
  seeders();
};

const connect = () => {
  console.log('[*] Starting to connect to mongodb database');

  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true
  }, (error) => {
    if (error) {
      console.log('[!] Error occured while connecting to mongodb');
    } else {
      console.log('[*] Connected to mongodb successful');

      afterHook();
    }
  });
};

export default { connect };
