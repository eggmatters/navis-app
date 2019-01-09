const http  = require('http');
const https = require('https');
const url   = require('url');
const request = require('request-promise');

const apiKey = '057dfa32a18eed0f2dc23dc2e80ed8a0';
const urlBase = 'http://api.themoviedb.org/3/search/movie/';

let requestUrl = null,
    searchString = null;

const server = http.createServer((req, response) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname,
        query = parsedUrl.query;

  if (path == '/favicon.ico') {
    return;
  }
  searchString = query.searchString;
  requestUrl = urlBase + '?page=1&include_adult=false&language=en-US&api_key=' + apiKey + '&query=' + searchString;

  console.log(`Request received on: ${path} + query: ${JSON.stringify(query)}`);
  console.log('query: ', query);

  fetchMovies(requestUrl).then( (responseJSON) => {
    response.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
    });

    response.write(responseJSON);
    response.end();
  });
});

const fetchMovies = (url) => {
  console.log('fetching:', url);
  try {
    return request(url).then( (response) => {
      return response;
    });
  } catch (e) {
    console.error(e.message);
  }
}

server.listen(3001, () => console.log("Server running at port 3001"));
