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

db.connect();

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

server.listen(port, (error) => {
  if (error) console.log('\n[!] Error occured while startinng server');
  else console.log(`\n[*] Server started successfully on port ${port}`);
});

export default server;
