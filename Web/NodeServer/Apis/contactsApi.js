     

var _ = require('lodash');
var Contact = require('../models/contactsModel.js');

module.exports = function(app) {

  // Create
  app.post('/contact', function(req, res) {
    var newContact = new Contact(req.body);
    newContact.save(function(err) {
      if (err) {
        res.json({
          info: 'error during contact create',
          error: err
        });
      }
      res.json({
        info: 'contact created successfully'
      });
    });
  });

  // Read
  app.get('/contact', function(req, res) {
    Contact.find(function(err, contacts) {
      if (err) {
        res.json({
          info: 'error during find contacts',
          error: err
        });
      }
      res.json({
        info: 'contacts found successfully',
        data: contacts
      });
    });
  });

  app.get('/contact/:id', function(req, res) {
    Contact.findById(req.params.id, function(err, contact) {
      if (err) {
        res.json({
          info: 'error during find contact',
          error: err
        });
      }
      if (contact) {
        res.json({
          info: 'found your contact',
          data: contact
        });
      } else {
        res.json({
          info: 'no contact found'
        });
      }
    });
  });

  // Update
  app.put('/contact/:id', function(req, res) {
    Contact.findById(req.params.id, function(err, contact) {
      if (err) {
        res.json({
          info: 'error during find contact',
          error: err
        });
      }
      if (contact) {
        _.merge(contact, req.body);
        contact.save(function(err) {
          if (err) {
            res.json({
              info: 'error during update contact',
              error: err
            });
          }
          res.json({
            info: 'contact updated successfully'
          });
        });
      } else {
        res.json({
          info: 'contact not found'
        });
      }
    });
  });

  // Delete
  app.delete('/contact/:id', function(req, res) {
    Contact.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({
          info: 'error during remove contact'
        });
      }
      res.json({
        info: 'contact removed successfully'
      });
    });
  });
}

















