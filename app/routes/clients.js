var Client = require('app/models/client');
var ObjectId = require('mongoose').Types.ObjectId;
var help = require('app/controllers/helpers');

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

function editClient(req, res) {
  var client = Client.findOne({ '_id': req.params.clientId })
    .lean()
    .exec(function(err, resp) {
      if (err) throw err;

      // ensure client belongs to user
      if (resp._user.toString() != req.user._id.toString())
        res.send(404); // TODO gen 404
      else
        res.render('pages/client', { client: resp });
    });
}

function putClient(req, res) {
  var put = Client.update({
      '_id':req.params.clientId,
      '_user':req.user._id
    },
    req.body, null, function(err, edited, resp) {
      if (err) throw err;
      if (edited)
        res.redirect('/clients');
    });
}

function setup(app, passport) {

  // all
  app.get('/clients', help.protect, getClients);
  app.post('/clients', help.protect, createClient);

  // single
  app.get('/client/:clientId', help.protect, editClient);
  app.post('/client/:clientId', help.protect, putClient);
}

module.exports = setup;
