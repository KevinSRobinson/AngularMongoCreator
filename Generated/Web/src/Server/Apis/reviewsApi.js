     

var _ = require('lodash');
var Review= require('../models/reviewsModel.js');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
     var tokenHelper = require('./apiHelpers')   ;
var create = function (req, res) {

    function save(err) {
    if (err) {
        res.json({
        info: 'error during review create',
        error: err
        });
    }
    res.json({
        info: 'review created successfully',
        data: newreview
    });
    };

    var newreview = new Review(req.body);
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    newreview.save(save);
};


var readAllForCurrentUser = function (req, res) {
    function get(err, reviews) {
    if (err) {
        res.json({
        info: 'error during find contacts by user',
        error: err
        });
    }
    res.json({
        info: 'reviews For User found successfully',
        data: reviews
    });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    Review.find({UserId: id}, get);
};



var read = function (req, res) {
    function get(err, reviews) {
    if (err) {
        res.json({
        info: 'error during find reviews',
        error: err
        });
    }
    res.json({
        info: 'reviews found successfully',
        data: reviews
    });
    };
    Review.find({}, get);
};


var update = function (req, res) {

    function find(err, review) {
    if (err) {
        res.json({
        info: 'error during find review',
        error: err
        });
    }
    if (review) {
        _.merge(review, req.body);
        review.save(function (err) {
        if (err) {
            res.json({
            info: 'error during update review',
            error: err
            });
        }
        res.json({
            info: 'review updated successfully'
        });
        });
    } else {
        res.json({
        info: 'review not found'
        });
    }
    };

    Review.findById(req.params.id, find);
};

var del = function (req, res) {
    Review.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
        res.json({
        info: 'error during remove review'
        });
    }
    res.json({
        info: 'review removed successfully'
    });
    });
};

router.post('/', create);
router.get('/', read);
router.get('/readAllForCurrentUser', readAllForCurrentUser);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;















