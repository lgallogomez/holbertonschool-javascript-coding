#!/usr/bin/node

const filesys = require('fs');

const urlDir = process.argv[2];

const fileName = process.argv[3];

const request = require('request');

request.get((urlDir), (error, response, body) => {
  if (error) {
    console.error(error);
  }
  filesys.writeFile(fileName, body, (err) => {
    if (err) {
      console.error(err);
    }
  });
});
