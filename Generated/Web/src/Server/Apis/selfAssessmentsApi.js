     

var _ = require('lodash');
var SelfAssessment= require('../models/selfAssessmentsModel.js');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
     var tokenHelper = require('./apiHelpers')   ;
var create = function (req, res) {

    function save(err) {
    if (err) {
        res.json({
        info: 'error during selfAssessment create',
        error: err
        });
    }
    res.json({
        info: 'selfAssessment created successfully',
        data: newselfAssessment
    });
    };

    var newselfAssessment = new SelfAssessment(req.body);
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    newselfAssessment.save(save);
};


var readAllForCurrentUser = function (req, res) {
    function get(err, selfAssessments) {
    if (err) {
        res.json({
        info: 'error during find contacts by user',
        error: err
        });
    }
    res.json({
        info: 'selfAssessments For User found successfully',
        data: selfAssessments
    });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    SelfAssessment.find({UserId: id}, get);
};



var read = function (req, res) {
    function get(err, selfAssessments) {
    if (err) {
        res.json({
        info: 'error during find selfAssessments',
        error: err
        });
    }
    res.json({
        info: 'selfAssessments found successfully',
        data: selfAssessments
    });
    };
    SelfAssessment.find({}, get);
};


var update = function (req, res) {

    function find(err, selfAssessment) {
    if (err) {
        res.json({
        info: 'error during find selfAssessment',
        error: err
        });
    }
    if (selfAssessment) {
        _.merge(selfAssessment, req.body);
        selfAssessment.save(function (err) {
        if (err) {
            res.json({
            info: 'error during update selfAssessment',
            error: err
            });
        }
        res.json({
            info: 'selfAssessment updated successfully'
        });
        });
    } else {
        res.json({
        info: 'selfAssessment not found'
        });
    }
    };

    SelfAssessment.findById(req.params.id, find);
};

var del = function (req, res) {
    SelfAssessment.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
        res.json({
        info: 'error during remove selfAssessment'
        });
    }
    res.json({
        info: 'selfAssessment removed successfully'
    });
    });
};

router.post('/', create);
router.get('/', read);
router.get('/readAllForCurrentUser', readAllForCurrentUser);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;















