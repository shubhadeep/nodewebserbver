"use strict";
exports.helloWorldHandler = function helloWorldHandler(request, response) {
  console.log('helloWorldHandler Start: ' + request.url);
  response.writeHead(200, {'content-type': 'text/plain' });
  response.write('Hello World');
  response.end();
  console.log('helloWorldHandler End');
};