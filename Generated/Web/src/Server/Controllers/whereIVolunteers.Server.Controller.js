
    
    var WhereIVolunteer = require('../Models/whereIVolunteersModel.js');

    exports.create = function (req, res) {
        var entry = new WhereIVolunteer({
            
            OldId: req.body.OldId,Name: req.body.Name,Organisation: req.body.Organisation,Details: req.body.Details,Address1: req.body.Address1,Address2: req.body.Address2,Town: req.body.Town,Postcode: req.body.Postcode,Email: req.body.Email,Tel: req.body.Tel,MyOrganisation: req.body.MyOrganisation,WhatMyOrganisationDoes: req.body.WhatMyOrganisationDoes,Agreement: req.body.Agreement,UserId: req.body.UserId
          

            
        });

        entry.save();

        res.redirect(301, '/');
    };


    exports.list = function (req, res) { 
         var query = WhereIVolunteer.find({}).then(function (results) {
         res.json(results);
    });


    };



   exports.findById = function (req, res) {
    var query = WhereIVolunteer.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

 

