     

var _ = require('lodash');
var TrainingSkill= require('../models/trainingSkillsModel.js');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
     var tokenHelper = require('./apiHelpers')   ;
var create = function (req, res) {

    function save(err) {
    if (err) {
        res.json({
        info: 'error during trainingSkill create',
        error: err
        });
    }
    res.json({
        info: 'trainingSkill created successfully',
        data: newtrainingSkill
    });
    };

    var newtrainingSkill = new TrainingSkill(req.body);
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    newtrainingSkill.save(save);
};


var readAllForCurrentUser = function (req, res) {
    function get(err, trainingSkills) {
    if (err) {
        res.json({
        info: 'error during find contacts by user',
        error: err
        });
    }
    res.json({
        info: 'trainingSkills For User found successfully',
        data: trainingSkills
    });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    TrainingSkill.find({UserId: id}, get);
};



var read = function (req, res) {
    function get(err, trainingSkills) {
    if (err) {
        res.json({
        info: 'error during find trainingSkills',
        error: err
        });
    }
    res.json({
        info: 'trainingSkills found successfully',
        data: trainingSkills
    });
    };
    TrainingSkill.find({}, get);
};


var update = function (req, res) {

    function find(err, trainingSkill) {
    if (err) {
        res.json({
        info: 'error during find trainingSkill',
        error: err
        });
    }
    if (trainingSkill) {
        _.merge(trainingSkill, req.body);
        trainingSkill.save(function (err) {
        if (err) {
            res.json({
            info: 'error during update trainingSkill',
            error: err
            });
        }
        res.json({
            info: 'trainingSkill updated successfully'
        });
        });
    } else {
        res.json({
        info: 'trainingSkill not found'
        });
    }
    };

    TrainingSkill.findById(req.params.id, find);
};

var del = function (req, res) {
    TrainingSkill.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
        res.json({
        info: 'error during remove trainingSkill'
        });
    }
    res.json({
        info: 'trainingSkill removed successfully'
    });
    });
};

router.post('/', create);
router.get('/', read);
router.get('/readAllForCurrentUser', readAllForCurrentUser);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;















