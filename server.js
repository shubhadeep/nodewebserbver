/**
 * Entry point to the application server
 * @param {router} router object to map requests to appropriate request handlers
 * @param {port} server port
 * @param {host} server host - if none provided, then use localhost
 */
"use strict";
exports.start = function (router, port, host) {
  var hostname = host || 'localhost';
  require('http').createServer(router.route)
                 .listen(port, hostname);
  console.log('Started Server on port: ' + port.toString());
};