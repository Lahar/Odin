define(['http', 'express', 'jade', 'stylus', 'nib'], function(http, express, jade, stylus, nib) {
  var app = express();
  var server = http.createServer(app);
  //  var baseUrl = requirejs.toUrl('').substring(0, requirejs.toUrl('').length - 1);
  console.log();
  function compile(str, path) {
    return stylus(str).set('filename', path).use(nib());
  }

  app.locals.pretty = true;
  app.set('views', requirejs.toUrl('/views'));
  app.set('view engine', 'jade');

  app.use(stylus.middleware({ src: requirejs.toUrl('./stylus/'), dest: requirejs.toUrl('/public/'), compile: compile }));
  app.use(express.static(requirejs.toUrl('/public')));

  app.get('/favicon.ico', function() {}); // Ignore the damn favicon


  var exports = {
    start : function(port) {
      port = port || 8085;
      server.listen(port);
      console.log('Server Started.');
    }
  };

  return exports;
});