     

var _ = require('lodash');
var Opportunity= require('../models/opportunitysModel.js');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
    
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
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    newopportunity.save(save);
};


var readAllForCurrentUser = function (req, res) {
    function get(err, opportunitys) {
    if (err) {
        res.json({
        info: 'error during find contacts by user',
        error: err
        });
    }
    res.json({
        info: 'opportunitys For User found successfully',
        data: opportunitys
    });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    Opportunity.find({UserId: id}, get);
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
    Opportunity.find({}, get);
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

router.post('/', create);
router.get('/', read);
router.get('/readAllForCurrentUser', readAllForCurrentUser);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;















