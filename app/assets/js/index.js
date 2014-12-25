var Emitter = require('wildemitter');
var domready = require('domready');

var app = {
  events: new Emitter(),
  $el: {}
};

require('./config')(app);

// let's go
domready(function() {
  app.events.emit('domready');
  console.info(app.config.name + ' started');
});
