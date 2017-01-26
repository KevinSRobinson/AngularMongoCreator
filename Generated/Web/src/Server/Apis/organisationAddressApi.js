     

var _ = require('lodash');
var OrganisationAddress= require('../models/organisationAddressModel.js');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
     var tokenHelper = require('./apiHelpers')   ;
var create = function (req, res) {

    function save(err) {
    if (err) {
        res.json({
        info: 'error during organisationAddress create',
        error: err
        });
    }
    res.json({
        info: 'organisationAddress created successfully',
        data: neworganisationAddress
    });
    };

    var neworganisationAddress = new OrganisationAddress(req.body);
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    neworganisationAddress.save(save);
};


var readAllForCurrentUser = function (req, res) {
    function get(err, organisationAddress) {
    if (err) {
        res.json({
        info: 'error during find contacts by user',
        error: err
        });
    }
    res.json({
        info: 'organisationAddress For User found successfully',
        data: organisationAddress
    });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    OrganisationAddress.find({UserId: id}, get);
};



var read = function (req, res) {
    function get(err, organisationAddress) {
    if (err) {
        res.json({
        info: 'error during find organisationAddress',
        error: err
        });
    }
    res.json({
        info: 'organisationAddress found successfully',
        data: organisationAddress
    });
    };
    OrganisationAddress.find({}, get);
};


var update = function (req, res) {

    function find(err, organisationAddress) {
    if (err) {
        res.json({
        info: 'error during find organisationAddress',
        error: err
        });
    }
    if (organisationAddress) {
        _.merge(organisationAddress, req.body);
        organisationAddress.save(function (err) {
        if (err) {
            res.json({
            info: 'error during update organisationAddress',
            error: err
            });
        }
        res.json({
            info: 'organisationAddress updated successfully'
        });
        });
    } else {
        res.json({
        info: 'organisationAddress not found'
        });
    }
    };

    OrganisationAddress.findById(req.params.id, find);
};

var del = function (req, res) {
    OrganisationAddress.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
        res.json({
        info: 'error during remove organisationAddress'
        });
    }
    res.json({
        info: 'organisationAddress removed successfully'
    });
    });
};

router.post('/', create);
router.get('/', read);
router.get('/readAllForCurrentUser', readAllForCurrentUser);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;















