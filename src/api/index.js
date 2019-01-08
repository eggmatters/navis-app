const http = require('http');
const url = require('url');
const Promise = require('promise');

const server = http.createServer((req, response) => {
    const parsedUrl = url.parse(req.url, true);

    const path = parsedUrl.pathname, query = parsedUrl.query;
    if (path == '/favicon.ico') {
      return;
    }
    const method = req.method;

    let responseJSON = JSON.stringify(query);

    console.log(`Request received on: ${path} + method: ${method} + query: ${responseJSON}`);
    console.log('query: ', query);

    response.writeHead(200, {
      //'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
    });
    response.write(responseJSON);
    response.end();
  });


  server.listen(3001, () => console.log("Server running at port 3001"));
