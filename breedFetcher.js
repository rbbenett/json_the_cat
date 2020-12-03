const request = require('request');
const args = process.argv.slice(2);
const website = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;


request(website,  (error, response, body) => {
  if (error) {
    throw (error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found');
  } else {
    console.log(data[0]['description']);
  }
  
});