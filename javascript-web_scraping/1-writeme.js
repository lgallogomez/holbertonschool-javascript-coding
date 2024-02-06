#!/usr/bin/node

const fs = require('fs');

const filename = process.argv[2];

const toWrite = process.argv[3];

fs.writeFile(filename, toWrite, (err, data) => {
  if (err) {
    console.error(err);
  }
});
