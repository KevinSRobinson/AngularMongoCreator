     

var _ = require('lodash');
var PlanOfAction= require('../models/planOfActionsModel.js');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
     var tokenHelper = require('./apiHelpers')   ;
var create = function (req, res) {

    function save(err) {
    if (err) {
        res.json({
        info: 'error during planOfAction create',
        error: err
        });
    }
    res.json({
        info: 'planOfAction created successfully',
        data: newplanOfAction
    });
    };

    var newplanOfAction = new PlanOfAction(req.body);
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    newplanOfAction.save(save);
};


var readAllForCurrentUser = function (req, res) {
    function get(err, planOfActions) {
    if (err) {
        res.json({
        info: 'error during find contacts by user',
        error: err
        });
    }
    res.json({
        info: 'planOfActions For User found successfully',
        data: planOfActions
    });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    PlanOfAction.find({UserId: id}, get);
};



var read = function (req, res) {
    function get(err, planOfActions) {
    if (err) {
        res.json({
        info: 'error during find planOfActions',
        error: err
        });
    }
    res.json({
        info: 'planOfActions found successfully',
        data: planOfActions
    });
    };
    PlanOfAction.find({}, get);
};


var update = function (req, res) {

    function find(err, planOfAction) {
    if (err) {
        res.json({
        info: 'error during find planOfAction',
        error: err
        });
    }
    if (planOfAction) {
        _.merge(planOfAction, req.body);
        planOfAction.save(function (err) {
        if (err) {
            res.json({
            info: 'error during update planOfAction',
            error: err
            });
        }
        res.json({
            info: 'planOfAction updated successfully'
        });
        });
    } else {
        res.json({
        info: 'planOfAction not found'
        });
    }
    };

    PlanOfAction.findById(req.params.id, find);
};

var del = function (req, res) {
    PlanOfAction.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
        res.json({
        info: 'error during remove planOfAction'
        });
    }
    res.json({
        info: 'planOfAction removed successfully'
    });
    });
};

router.post('/', create);
router.get('/', read);
router.get('/readAllForCurrentUser', readAllForCurrentUser);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;















