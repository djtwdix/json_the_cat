const args = process.argv.splice(2);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (err, response, body) => {
  const data = JSON.parse(body);
    console.log(data);
});