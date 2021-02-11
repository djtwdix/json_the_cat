//Get command line arguments and join them into single string
const breedName = process.argv.splice(2).join("");
//Require fetchBreedDescription from breedFetcher
const fetchBreedDescription = require("./breedFetcher");

//fetchBreedDescription function takes in breedName and callback
fetchBreedDescription(breedName, (error, desc) => {
  //if error print error
  if (error) {
    console.log('Error fetch details:', error);
    //if no error print description
  } else {
    console.log(desc);
  }
});