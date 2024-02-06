#!/usr/bin/node

const request = require('request');

const url = argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`code: ${response.statusCode}`)
  }
});