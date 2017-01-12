     

     var _ = require('lodash');
     var HourRecord= require('../models/hourRecordsModel.js');
     var mongoose = require('mongoose');

     module.exports = function (app) {

       var create = function (req, res) {

         function save(err) {
           if (err) {
             res.json({
               info: 'error during hourRecord create',
               error: err
             });
           }
           res.json({
             info: 'hourRecord created successfully',
             data: newhourRecord
           });
         };

         var newhourRecord = new HourRecord(req.body);
         newhourRecord.save(save);
       };

       var read = function (req, res) {

         function get(err, hourRecords) {
           if (err) {
             res.json({
               info: 'error during find hourRecords',
               error: err
             });
           }
           res.json({
             info: 'hourRecords found successfully',
             data: hourRecords
           });
         };

         HourRecord.find(get);
       };

       var update = function (req, res) {

         function find(err, hourRecord) {
           if (err) {
             res.json({
               info: 'error during find hourRecord',
               error: err
             });
           }
           if (hourRecord) {
             _.merge(hourRecord, req.body);
             hourRecord.save(function (err) {
               if (err) {
                 res.json({
                   info: 'error during update hourRecord',
                   error: err
                 });
               }
               res.json({
                 info: 'hourRecord updated successfully'
               });
             });
           } else {
             res.json({
               info: 'hourRecord not found'
             });
           }
         };

         HourRecord.findById(req.params.id, find);
       };

       var del = function (req, res) {
         HourRecord.findByIdAndRemove(req.params.id, function (err) {
           if (err) {
             res.json({
               info: 'error during remove hourRecord'
             });
           }
           res.json({
             info: 'hourRecord removed successfully'
           });
         });
       };

       app.post('/hourRecords', create);
       app.get('/hourRecords', read);
       app.put('/hourRecords/:id', update);
       app.delete('/hourRecords/:id', del);

     };
















