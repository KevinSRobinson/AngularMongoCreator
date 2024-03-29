     

     var _ = require('lodash');
     var Opportunity= require('../models/opportunitysModel.js');
     var mongoose = require('mongoose');

     module.exports = function (app) {

       var create = function (req, res) {

         function save(err) {
           if (err) {
             res.json({
               info: 'error during opportunity create',
               error: err
             });
           }
           res.json({
             info: 'opportunity created successfully',
             data: newopportunity
           });
         };

         var newopportunity = new Opportunity(req.body);
         newopportunity.save(save);
       };

       var read = function (req, res) {

         function get(err, opportunitys) {
           if (err) {
             res.json({
               info: 'error during find opportunitys',
               error: err
             });
           }
           res.json({
             info: 'opportunitys found successfully',
             data: opportunitys
           });
         };

         Opportunity.find(get);
       };

       var update = function (req, res) {

         function find(err, opportunity) {
           if (err) {
             res.json({
               info: 'error during find opportunity',
               error: err
             });
           }
           if (opportunity) {
             _.merge(opportunity, req.body);
             opportunity.save(function (err) {
               if (err) {
                 res.json({
                   info: 'error during update opportunity',
                   error: err
                 });
               }
               res.json({
                 info: 'opportunity updated successfully'
               });
             });
           } else {
             res.json({
               info: 'opportunity not found'
             });
           }
         };

         Opportunity.findById(req.params.id, find);
       };

       var del = function (req, res) {
         Opportunity.findByIdAndRemove(req.params.id, function (err) {
           if (err) {
             res.json({
               info: 'error during remove opportunity'
             });
           }
           res.json({
             info: 'opportunity removed successfully'
           });
         });
       };

       app.post('/opportunitys', create);
       app.get('/opportunitys', read);
       app.put('/opportunitys/:id', update);
       app.delete('/opportunitys/:id', del);

     };
















