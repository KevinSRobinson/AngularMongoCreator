     var _ = require('lodash');
     var Contact = require('../models/contactsModel.js');
     var mongoose = require('mongoose');
     var tokenHelper = require('./apiHelpers');

  

     var completeSave = function (res, data,  infoMessage,errorMessage, err) {
       if (err) {
         res.json({
           info: infoMessage,
           error: err
         });
       }
       res.json({
         info: errorMessage,
         data: data
       });
     };

     var CreateSuccess = 'contact created Successfully';
     var CreateError  = 'contact created Successfully';

     var modifyuccess = 'contact created Successfully';

     module.exports = function (app) {

       var create = function (req, res) {
         //Create a new Contact
         var newcontact = new Contact(req.body);
         //Set the userId of the current user
         newcontact.UserId = tokenHelper.getUserIdFromToken(req);
         newcontact.save(completeSave(res, newcontact, CreateSuccess, CreateError));
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
         var id = tokenHelper.getUserIdFromToken(req);
         Contact.find({UserId: id}, get);
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


       var base = '/api/'
       app.post(base + 'contacts', create);
       app.get(base + 'contacts', read);
       app.put(base + 'contacts/:id', update);
       app.delete(base + 'contacts/:id', del);

     };