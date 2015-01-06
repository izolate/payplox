var Emitter = require('wildemitter');
var domready = require('domready');

window.jQuery = window.$ = require('jquery');

var app = {
  events: new Emitter(),
  $el: {}
};

require('./config')(app);

// controllers
require('./controllers/user')(app);
require('./controllers/client')(app);

// let's go
domready(function() {
  app.events.emit('domready');
  console.info(app.config.name + ' started');

});
