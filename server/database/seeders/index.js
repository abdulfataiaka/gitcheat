/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-console */
import fs from 'fs';

let files;
try {
  files = fs
    .readdirSync(__dirname)
    .filter(filename => filename !== 'index.js');
} catch (err) {
  files = [];
}

const seeders = files.map(file => require(`${__dirname}/${file}`).default);

export default () => {
  seeders.forEach(seeder => seeder());
};
