var requirejs = require('requirejs');

requirejs.config({
  baseUrl: __dirname,
  nodeRequire: require
});

requirejs(['webserver'], function(webserver) {
  webserver.start(8085);
});