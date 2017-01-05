     

var _ = require('lodash');
var Organisation = require('../models/organisationsModel.js');

module.exports = function(app) {

  // Create
  app.post('/organisation', function(req, res) {
    var newOrganisation = new Organisation(req.body);
    newOrganisation.save(function(err) {
      if (err) {
        res.json({
          info: 'error during organisation create',
          error: err
        });
      }
      res.json({
        info: 'organisation created successfully'
      });
    });
  });

  // Read
  app.get('/organisation', function(req, res) {
    Organisation.find(function(err, organisations) {
      if (err) {
        res.json({
          info: 'error during find organisations',
          error: err
        });
      }
      res.json({
        info: 'organisations found successfully',
        data: organisations
      });
    });
  });

  app.get('/organisation/:id', function(req, res) {
    Organisation.findById(req.params.id, function(err, organisation) {
      if (err) {
        res.json({
          info: 'error during find organisation',
          error: err
        });
      }
      if (organisation) {
        res.json({
          info: 'found your organisation',
          data: organisation
        });
      } else {
        res.json({
          info: 'no organisation found'
        });
      }
    });
  });

  // Update
  app.put('/organisation/:id', function(req, res) {
    Organisation.findById(req.params.id, function(err, organisation) {
      if (err) {
        res.json({
          info: 'error during find organisation',
          error: err
        });
      }
      if (organisation) {
        _.merge(organisation, req.body);
        organisation.save(function(err) {
          if (err) {
            res.json({
              info: 'error during update organisation',
              error: err
            });
          }
          res.json({
            info: 'organisation updated successfully'
          });
        });
      } else {
        res.json({
          info: 'organisation not found'
        });
      }
    });
  });

  // Delete
  app.delete('/organisation/:id', function(req, res) {
    Organisation.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({
          info: 'error during remove organisation'
        });
      }
      res.json({
        info: 'organisation removed successfully'
      });
    });
  });
}

















