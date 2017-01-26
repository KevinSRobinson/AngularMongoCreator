
    
    var PlanOfAction = require('../Models/planOfActionsModel.js');

    exports.create = function (req, res) {
        var entry = new PlanOfAction({
            
            OldId: req.body.OldId,Achieve: req.body.Achieve,WhatIDo: req.body.WhatIDo,WhoDoIHelp: req.body.WhoDoIHelp,UserId: req.body.UserId
          

            
        });

        entry.save();

        res.redirect(301, '/');
    };


    exports.list = function (req, res) { 
         var query = PlanOfAction.find({}).then(function (results) {
         res.json(results);
    });


    };



   exports.findById = function (req, res) {
    var query = PlanOfAction.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

 

