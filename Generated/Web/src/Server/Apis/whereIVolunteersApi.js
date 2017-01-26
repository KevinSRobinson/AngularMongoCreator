     

var _ = require('lodash');
var WhereIVolunteer= require('../models/whereIVolunteersModel.js');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
     var tokenHelper = require('./apiHelpers')   ;
var create = function (req, res) {

    function save(err) {
    if (err) {
        res.json({
        info: 'error during whereIVolunteer create',
        error: err
        });
    }
    res.json({
        info: 'whereIVolunteer created successfully',
        data: newwhereIVolunteer
    });
    };

    var newwhereIVolunteer = new WhereIVolunteer(req.body);
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    newwhereIVolunteer.save(save);
};


var readAllForCurrentUser = function (req, res) {
    function get(err, whereIVolunteers) {
    if (err) {
        res.json({
        info: 'error during find contacts by user',
        error: err
        });
    }
    res.json({
        info: 'whereIVolunteers For User found successfully',
        data: whereIVolunteers
    });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    WhereIVolunteer.find({UserId: id}, get);
};



var read = function (req, res) {
    function get(err, whereIVolunteers) {
    if (err) {
        res.json({
        info: 'error during find whereIVolunteers',
        error: err
        });
    }
    res.json({
        info: 'whereIVolunteers found successfully',
        data: whereIVolunteers
    });
    };
    WhereIVolunteer.find({}, get);
};


var update = function (req, res) {

    function find(err, whereIVolunteer) {
    if (err) {
        res.json({
        info: 'error during find whereIVolunteer',
        error: err
        });
    }
    if (whereIVolunteer) {
        _.merge(whereIVolunteer, req.body);
        whereIVolunteer.save(function (err) {
        if (err) {
            res.json({
            info: 'error during update whereIVolunteer',
            error: err
            });
        }
        res.json({
            info: 'whereIVolunteer updated successfully'
        });
        });
    } else {
        res.json({
        info: 'whereIVolunteer not found'
        });
    }
    };

    WhereIVolunteer.findById(req.params.id, find);
};

var del = function (req, res) {
    WhereIVolunteer.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
        res.json({
        info: 'error during remove whereIVolunteer'
        });
    }
    res.json({
        info: 'whereIVolunteer removed successfully'
    });
    });
};

router.post('/', create);
router.get('/', read);
router.get('/readAllForCurrentUser', readAllForCurrentUser);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;















