#!/usr/bin/node

const movieId = process.argv[2];
const request = require('request');

const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request((url), (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const jsonData = JSON.parse(body);
  console.log(jsonData.title);
});
