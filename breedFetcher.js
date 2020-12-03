const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(website,  (error, response, body) => {
    const data = JSON.parse(body);
    const desc = data[0]['description'];
    if (error) {
      return callback(error);
    }
    return callback(null, desc);
  });
};

module.exports = { fetchBreedDescription };
