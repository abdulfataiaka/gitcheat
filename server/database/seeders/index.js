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

export default (done) => {
  let seedCount = 0;

  seeders.forEach((seeder) => {
    seeder(() => {
      if (seedCount >= seeders.length - 1) {
        if (typeof done === 'function') done();
      } else seedCount += 1;
    });
  });
};
