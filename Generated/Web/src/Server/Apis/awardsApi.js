     var _ = require('lodash');
     var Awards = require('../models/awardsModel.js');
     var mongoose = require('mongoose');
     var express = require('express');
     var router = express.Router();
     var tokenHelper = require('./apiHelpers');
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
         newcontact.UserId = tokenHelper.getUserIdFromToken(req);
         newawards.save(save);
     };


     var readAllForCurrentUser = function (req, res) {
         function get(err, awards) {
             if (err) {
                 res.json({
                     info: 'error during find contacts by user',
                     error: err
                 });
             }
             res.json({
                 info: 'awards For User found successfully',
                 data: awards
             });
         };
         var id = tokenHelper.getUserIdFromToken(req);
         Awards.find({
             UserId: id
         }, get);
     };



     var read = function (req, res) {
         function get(err, awards) {
             if (err) {
                 res.json({
                     info: 'error during find awards',
                     error: err
                 });
             }
             res.json({
                 info: 'awards found successfully',
                 data: awards
             });
         };
         Awards.find({}, get);
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

     router.post('/', create);
     router.get('/', read);
     router.get('/readAllForCurrentUser', readAllForCurrentUser);
     router.put('/:id', update);
     router.delete('/:id', del);


     module.exports = router;