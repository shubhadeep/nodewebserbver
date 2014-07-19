"use strict";
exports.notFoundHandler = function (request, response) {
  var notFoundResponse = {
    code: 404,
    headers: {'content-type': 'text/html' },
    body: '<html><head><title>Not Found</title></head><body><h1>Not Found</h1><h2>Sorry, the requested document was not found</h2></body></html>'
  };
  console.log('404, executing not-found handler for:' + request.url);
  response.writeHead(notFoundResponse.code, notFoundResponse.headers);
  response.write(notFoundResponse.body);
  response.end();
};