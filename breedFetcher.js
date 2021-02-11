
//require request
const request = require('request');

//fetchBreedDescription takes in breedName and callback
const fetchBreedDescription = (breedName, callback) => {
  //send get request to cat API with breedName as search query
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    //if error input error as first parameter of callback
    if (err) {
      callback(err, null);
    } else {
      //parse body to turn into object
      const data = JSON.parse(body);
      //if there is nothing in data input apology message as first param in callback
      if (!data[0]) {
        callback("We're sorry this breed is not in our database or does not exist, please try another breed", null);
        //if there is something in data input data as second param in callback
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = fetchBreedDescription;