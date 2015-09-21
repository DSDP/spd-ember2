var proxyPath = '/api/sparl';
var apiPath = '/api';

var bodyParser = require('body-parser');
var globSync   = require('glob').sync;
var routes     = globSync('./routes/**/*.js', { cwd: __dirname }).map(require);

var proxy = require('./lib/fullNodeProxy.js').createProxyServer( { target: 'http://srv-sparl-5.hcdn.gob.ar:8000/apirest' } );
var path = require('path');



module.exports = function(app) {
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: true
  }));




  app.use(proxyPath, function(req, res, next) {
    proxy.web(req, res);
  });

  routes.forEach(function(route) { route(app); });
};

