/* eslint-disable no-console */

import path from 'path';
import express from 'express';
import routes from './routes';

const server = express();
const port = process.env.PORT || 9000;
const router = express.Router();

server.use('/build', express.static('build'));
server.use('/public', express.static('public'));
server.use('/bower_components', express.static('bower_components'));

server.get('/', (request, response) => {
  response.status(200).sendFile(path.resolve('public/index.html'));
});

server.use('/api', routes(router));

server.listen(port, (error) => {
  if (error) console.log('\n[!] Error occured while startinng server');
  else console.log(`\n[*] Server started successfully on port ${port}`);
});

export default server;
