"use strict";
var routes          = {},
    notFoundHandler = require('./notfoundhandler').notFoundHandler;

exports.route = function (request, response) {
  var path = require('url').parse(request.url).pathname,
      handler;
  console.log('Routing request on: ' + path.toString());
  handler = (path in routes) ? routes[path] : notFoundHandler;
  handler(request, response);
};

exports.configure = function (pathname, handler) {
  routes[pathname] = handler;
};

exports.setNotFound = function (handler) {
  notFoundHandler = handler;
};