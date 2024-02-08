#!/usr/bin/node

const api = process.argv[2];
const request = require('request');

request('https://swapi-api.hbtn.io/api/people/18', (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const jsonData = JSON.parse(body);
  const films = jsonData.films;
  console.log(films.length);
});
