/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import db from './database';

dotenv.config();

const server = express();
const port = process.env.PORT || 9000;
const router = express.Router();

server.use('/build', express.static('build'));
server.use('/public', express.static('public'));
server.use('/bower_components', express.static('bower_components'));

server.use('/api', routes(router));

server.get('/', (request, response) => {
  response.status(200).sendFile(path.resolve('public/index.html'));
});

server.all('*', (request, response) => {
  response.redirect('/');
});

db.connect((dberror) => {
  console.log('\n[*] Attempting to start server');

  if (!dberror) {
    server.listen(port, (error) => {
      if (error) console.log('[!] Error occured while starting server');
      else console.log(`[*] Server started successfully on port ${port}`);
    });
  }
});

export default server;
