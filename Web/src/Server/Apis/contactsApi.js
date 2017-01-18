     

     var _ = require('lodash');
     var Contact= require('../models/contactsModel.js');
     var mongoose = require('mongoose');
     var tokenHelper= require('./apiHelpers');
     module.exports = function (app) {

       var create = function (req, res) {

         function save(err) {
           if (err) {
             res.json({
               info: 'error during contact create',
               error: err
             });
           }
           res.json({
             info: 'contact created successfully',
             data: newcontact
           });
         };

         var newcontact = new Contact(req.body);
         newcontact.UserId = tokenHelper.getUserIdFromToken(req);
         console.log(newcontact.UserId);
         newcontact.save(save);
       };





       var readAllForCurrentUser = function (req, res) {
         function get(err, contacts) {
           if (err) {
             res.json({
               info: 'error during find contacts by user',
               error: err
             });
           }
           res.json({
             info: 'contacts For User found successfully',
             data: contacts
           });
         };
         var id = tokenHelper.getUserIdFromToken(req);
          console.log(newcontact.UserId);
         Contact.find({UserId: id}, get);
       };

       var read = function (req, res) {
         function get(err, contacts) {
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
         };
         Contact.find({}, get);
       };



       var update = function (req, res) {

         function find(err, contact) {
           if (err) {
             res.json({
               info: 'error during find contact',
               error: err
             });
           }
           if (contact) {
             _.merge(contact, req.body);
             contact.save(function (err) {
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
         };

         Contact.findById(req.params.id, find);
       };

       var del = function (req, res) {
         Contact.findByIdAndRemove(req.params.id, function (err) {
           if (err) {
             res.json({
               info: 'error during remove contact'
             });
           }
           res.json({
             info: 'contact removed successfully'
           });
         });
       };

       app.post('/api/contacts', create);
       app.get('/api/contacts', read);
       app.get('/api/readAllForCurrentUser', readAllForCurrentUser);
       app.put('/api/contacts/:id', update);
       app.delete('/api/contacts/:id', del);

     };
















