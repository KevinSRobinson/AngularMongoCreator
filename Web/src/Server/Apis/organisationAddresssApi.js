     

     var _ = require('lodash');
     var OrganisationAddress= require('../models/organisationAddresssModel.js');
     var mongoose = require('mongoose');

     module.exports = function (app) {

       var create = function (req, res) {

         function save(err) {
           if (err) {
             res.json({
               info: 'error during organisationAddress create',
               error: err
             });
           }
           res.json({
             info: 'organisationAddress created successfully',
             data: neworganisationAddress
           });
         };

         var neworganisationAddress = new OrganisationAddress(req.body);
         newcontact.UserId = tokenHelper.getUserIdFromToken(req);
         neworganisationAddress.save(save);
       };





       var readAllForCurrentUser = function (req, res) {
         function get(err, organisationAddresss) {
           if (err) {
             res.json({
               info: 'error during find contacts by user',
               error: err
             });
           }
           res.json({
             info: 'organisationAddresss For User found successfully',
             data: organisationAddresss
           });
         };
         var id = tokenHelper.getUserIdFromToken(req);
         OrganisationAddress.find({UserId: id}, get);
       };

       var read = function (req, res) {
         function get(err, organisationAddresss) {
           if (err) {
             res.json({
               info: 'error during find organisationAddresss',
               error: err
             });
           }
           res.json({
             info: 'organisationAddresss found successfully',
             data: organisationAddresss
           });
         };
         OrganisationAddress.find({}, get);
       };



       var update = function (req, res) {

         function find(err, organisationAddress) {
           if (err) {
             res.json({
               info: 'error during find organisationAddress',
               error: err
             });
           }
           if (organisationAddress) {
             _.merge(organisationAddress, req.body);
             organisationAddress.save(function (err) {
               if (err) {
                 res.json({
                   info: 'error during update organisationAddress',
                   error: err
                 });
               }
               res.json({
                 info: 'organisationAddress updated successfully'
               });
             });
           } else {
             res.json({
               info: 'organisationAddress not found'
             });
           }
         };

         OrganisationAddress.findById(req.params.id, find);
       };

       var del = function (req, res) {
         OrganisationAddress.findByIdAndRemove(req.params.id, function (err) {
           if (err) {
             res.json({
               info: 'error during remove organisationAddress'
             });
           }
           res.json({
             info: 'organisationAddress removed successfully'
           });
         });
       };

       app.post('/api/organisationAddresss', create);
       app.get('/api/organisationAddresss', read);
       app.get('/api/readAllForCurrentUser', readAllForCurrentUser);
       app.put('/api/organisationAddresss/:id', update);
       app.delete('/api/organisationAddresss/:id', del);

     };
















