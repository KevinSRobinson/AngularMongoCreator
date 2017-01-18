     

var _ = require('lodash');
var Contact= require('../models/contactsModel.js');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
    
var create = function (req, res) {

    function save(err) {
    if (err) {
        res.json({
        info: 'error during contact create',
        error: err
        });
    }
    res.json({
        info: 'contact created successfully',
        data: newcontact
    });
    };

    var newcontact = new Contact(req.body);
    newcontact.UserId = tokenHelper.getUserIdFromToken(req);
    newcontact.save(save);
};


var readAllForCurrentUser = function (req, res) {
    function get(err, contacts) {
    if (err) {
        res.json({
        info: 'error during find contacts by user',
        error: err
        });
    }
    res.json({
        info: 'contacts For User found successfully',
        data: contacts
    });
    };
    var id = tokenHelper.getUserIdFromToken(req);
    Contact.find({UserId: id}, get);
};



var read = function (req, res) {
    function get(err, contacts) {
    if (err) {
        res.json({
        info: 'error during find contacts',
        error: err
        });
    }
    res.json({
        info: 'contacts found successfully',
        data: contacts
    });
    };
    Contact.find({}, get);
};


var update = function (req, res) {

    function find(err, contact) {
    if (err) {
        res.json({
        info: 'error during find contact',
        error: err
        });
    }
    if (contact) {
        _.merge(contact, req.body);
        contact.save(function (err) {
        if (err) {
            res.json({
            info: 'error during update contact',
            error: err
            });
        }
        res.json({
            info: 'contact updated successfully'
        });
        });
    } else {
        res.json({
        info: 'contact not found'
        });
    }
    };

    Contact.findById(req.params.id, find);
};

var del = function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
        res.json({
        info: 'error during remove contact'
        });
    }
    res.json({
        info: 'contact removed successfully'
    });
    });
};

router.post('/', create);
router.get('/', read);
router.get('/readAllForCurrentUser', readAllForCurrentUser);
router.put('/:id', update);
router.delete('/:id', del);


module.exports = router;















