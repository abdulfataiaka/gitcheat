import express from 'express';
import morgan from 'morgan';
import apiRoutes from './routes/api';
import webRoutes from './routes/web';

const server = express();
const port = process.env.PORT || 9000;

server.use(morgan('common'));
server.use('/public', express.static('public'));
server.use('/bower_components', express.static('bower_components'));

server.use('/api', apiRoutes(express.Router()));
server.use(webRoutes(express.Router()));

server.listen(port, (error) => {
  if (error) console.log('\n[!] Error occured while startinng server');
  else console.log(`\n[*] Server started successfully on port ${port}`);
});

export default server;
