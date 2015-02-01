(function () {
  "use strict";

  var express = require('express');

  var app = express();

  app.use(express.static(__dirname + '/../public'));

  var connectionString = 'mongodb://localhost/iommi';

  // configuration
  var db = require('./data/connectToDb')(connectionString);
  app.set('db', db);


  // register routes
  require('./routes')(app);

  var server = require('./sockets/initSockets')(app);

  server.listen(3003, function () {
    console.log('I\'m listening...');
  });
}());