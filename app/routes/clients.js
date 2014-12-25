var Client = require('app/models/client');
var ObjectId = require('mongoose').Types.ObjectId;

/**
 * GET/POST clients
 */
function getClients(req, res) {
  var query = Client
    .find({ '_user': new ObjectId(req.user._id) })
    .lean()
    .exec(function(err, clients) {
      if (err) throw err;
      res.render('pages/clients', { clients: clients });
    });
}

function createClient(req, res, next) {
  var data = req.body;
  data._user = req.user._id;

  var client = new Client(data);
  client.save(function(err, resp) {
    if (err) throw err;
    next();
  });

  res.render('pages/clients');
}

function isAuthorized(req, res, next) {
  if (!req.user) {
    res.redirect('/');
  } else {
    next();
  }
}

function setup(app, passport) {
  app.get('/clients', getClients);
  app.post('/clients', createClient);
 // app.get('/clients/edit/:clientId, editClient);
}

module.exports = setup;
