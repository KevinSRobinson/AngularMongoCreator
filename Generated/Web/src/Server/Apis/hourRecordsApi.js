     

var _ = require('lodash');
var HourRecord= require('../models/hourRecordsModel.js');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
     var tokenHelper = require('./apiHelpers')   ;
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
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    newhourRecord.save(save);
};


var readAllForCurrentUser = function (req, res) {
    function get(err, hourRecords) {
    if (err) {
        res.json({
        info: 'error during find contacts by user',
        error: err
        });
    }
    res.json({
        info: 'hourRecords For User found successfully',
        data: hourRecords
    });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    HourRecord.find({UserId: id}, get);
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
    HourRecord.find({}, get);
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

router.post('/', create);
router.get('/', read);
router.get('/readAllForCurrentUser', readAllForCurrentUser);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;















