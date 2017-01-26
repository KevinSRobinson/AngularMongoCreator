
    
    var OrganisationAddress = require('../Models/organisationAddressModel.js');

    exports.create = function (req, res) {
        var entry = new OrganisationAddress({
            
            Id: req.body.Id,Address1: req.body.Address1,Address2: req.body.Address2,Postcode: req.body.Postcode,Town: req.body.Town
          

            
        });

        entry.save();

        res.redirect(301, '/');
    };


    exports.list = function (req, res) { 
         var query = OrganisationAddress.find({}).then(function (results) {
         res.json(results);
    });


    };



   exports.findById = function (req, res) {
    var query = OrganisationAddress.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

 

