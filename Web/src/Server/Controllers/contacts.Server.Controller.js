var Contact = require('../Models/contactsModel.js');
var tokenHelper = require('./apiHelpers');

exports.create = function (req, res, id) {
    var entry = new Contact({
        Id: req.body.Id,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Telephone: req.body.Telephone,
        Email: req.body.Email,
        UserId: 'testgjgh'
    });

    entry.save();

    res.redirect(301, '/');
};


exports.list = function (req, res) {
    var query = Contact.find({'userId': 'auth0|55734889294523276ea098de'}).then(function (results) {
        res.json(results);
    });
};



exports.findById = function (req, res) {
    var query = Contact.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};