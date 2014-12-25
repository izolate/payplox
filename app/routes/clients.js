var Client = require('app/models/client');
var ObjectId = require('mongoose').Types.ObjectId;
var help = require('app/controllers/helpers');
var countries = require('country-list')();

/**
 * Get all available clients
 * @method: GET
 */
function getClients(req, res) {
  var query = Client
    .find({ '_user': new ObjectId(req.user._id) })
    .lean()
    .exec(function(err, clients) {
      if (err) throw err;
      res.render('pages/clients', {
        clients: clients,
        csrfToken: req.csrfToken(),
        countries: countries.getData()
      });
    });
}

/**
 * Get a single client
 * @method: GET
 */
function getSingleClient(req, res) {
  var query = Client
    .findOne({ '_id':req.params.clientId, '_user':req.user._id })
    .lean()
    .exec(function(err, resp) {
      if (err) throw err;

      res.render('pages/client', {
        client: resp,
        csrfToken: req.csrfToken(),
        countries: countries.getData()
      });
    });
}

/**
 * Create a new client
 * @method: POST
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
 * @method: POST
 */
function putClients(req, res) {
  var put = Client
    .update({
      '_id': req.params.clientId,
      '_user': req.user._id
    },
    req.body, null, function(err, edited, resp) {
      if (err) throw err;
      if (edited)
        res.redirect('/clients');
    });
}

/**
 * Delete a client
 * @method: DELETE
 */
function deleteClient(req, res, next) {
  var query = Client
    .findOne({
      '_id': req.params.clientId, '_user': req.user._id
    })
    .remove()
    .exec(function(err, resp) {
      if (err) next(err);
      res.send('success');
    });
}

function setup(app, passport) {
  app.get('/clients', help.protect, getClients);
  app.get('/clients/:clientId', help.protect, getSingleClient);
  app.post('/clients', help.protect, postClients);
  app.post('/clients/:clientId', help.protect, putClients);
  app.delete('/clients/:clientId', help.protect, deleteClient);
}

module.exports = setup;
