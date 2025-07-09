// Script to check backend health endpoint

const fetch = require('node-fetch');

fetch('http://localhost:4000/')
  .then(res => res.text())
  .then(text => console.log('Backend response:', text))
  .catch(console.error);
