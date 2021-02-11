//Get command line arguments and join them into single string
const breedGiven = process.argv.splice(2).join("");
//require request
const request = require('request');

//send get request to cat API with breedGiven as search query
request(`https://api.thectapi.com/v1/breeds/search?q=${breedGiven}`, (err, response, body) => {
  //if error throw error
  if (err) {
    throw err;
  } else {
    //parse body to turn into object
    const data = JSON.parse(body);
    //if there is nothing in data print breed is not in database
    if (!data[0]) {
      console.log("We're sorry this breed is not in our database or does not exist, please try another breed");
    //if there is something in data print data
    } else {
      console.log(data);
    }
  }
});