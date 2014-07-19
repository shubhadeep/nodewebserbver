(function () {
  "use strict";
  var server = require("./server"),
      router = require("./router"),
      handlers = require("./handlers"),
      port = 9999;
  router.configure('/', handlers.helloWorldHandler);
  server.start(router, port);
})();