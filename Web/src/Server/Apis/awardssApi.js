     

     var _ = require('lodash');
     var Awards= require('../models/awardssModel.js');
     var mongoose = require('mongoose');


     module.exports = function (app) {

       var create = function (req, res) {

         function save(err) {
           if (err) {
             res.json({
               info: 'error during awards create',
               error: err
             });
           }
           res.json({
             info: 'awards created successfully',
             data: newawards
           });
         };

         var newawards = new Awards(req.body);
         newawards.save(save);
       };

       var read = function (req, res) {

         function get(err, awardss) {
           if (err) {
             res.json({
               info: 'error during find awardss',
               error: err
             });
           }
           res.json({
             info: 'awardss found successfully',
             data: awardss
           });
         };

         Awards.find(get);
       };

       var update = function (req, res) {

         function find(err, awards) {
           if (err) {
             res.json({
               info: 'error during find awards',
               error: err
             });
           }
           if (awards) {
             _.merge(awards, req.body);
             awards.save(function (err) {
               if (err) {
                 res.json({
                   info: 'error during update awards',
                   error: err
                 });
               }
               res.json({
                 info: 'awards updated successfully'
               });
             });
           } else {
             res.json({
               info: 'awards not found'
             });
           }
         };

         Awards.findById(req.params.id, find);
       };

       var del = function (req, res) {
         Awards.findByIdAndRemove(req.params.id, function (err) {
           if (err) {
             res.json({
               info: 'error during remove awards'
             });
           }
           res.json({
             info: 'awards removed successfully'
           });
         });
       };

       var base = '/api/'
       app.post(base + 'awardss', create);
       app.get('/awardss', read);
       app.put('/awardss/:id', update);
       app.delete('/awardss/:id', del);

     };
















