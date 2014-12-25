var Client = require('app/models/client');
var ObjectId = require('mongoose').Types.ObjectId;
var help = require('app/controllers/helpers');

/**
 * Get all available clients
 */
function getClients(req, res) {
  var query = Client
    .find({ '_user': new ObjectId(req.user._id) })
    .lean()
    .exec(function(err, clients) {
      if (err) throw err;
      res.render('pages/clients', {
        clients: clients, csrfToken: req.csrfToken()
      });
    });
}

/**
 * Get a single client
 */
function getSingleClient(req, res) {
  var query = Client
    .findOne({ '_id':req.params.clientId, '_user':req.user._id })
    .lean()
    .exec(function(err, resp) {
      if (err) throw err;

      res.render('pages/client', {
        client: resp, csrfToken: req.csrfToken()
      });
    });
}

/**
 * Create a new client
 */
function postClients(req, res, next) {
  var data = req.body;
  data._user = req.user._id;

  var client = new Client(data);
  client.save(function(err, resp) {
    if (err) throw err;
    res.redirect('/clients');
  });
}

/**
 * Update an existing client
 */
function putClients(req, res) {
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

  // get all
  app.get('/clients', help.protect, getClients);
  // get single
  app.get('/clients/:clientId', help.protect, getSingleClient);
  // create new
  app.post('/clients', help.protect, postClients);
  // edit
  app.post('/clients/:clientId', help.protect, putClients);
}

module.exports = setup;
