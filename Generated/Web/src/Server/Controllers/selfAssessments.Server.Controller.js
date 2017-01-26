
    
    var SelfAssessment = require('../Models/selfAssessmentsModel.js');

    exports.create = function (req, res) {
        var entry = new SelfAssessment({
            
            OldId: req.body.OldId,Analysis: req.body.Analysis,Description: req.body.Description,Evaluation: req.body.Evaluation,FutureLearning: req.body.FutureLearning,UserId: req.body.UserId
          

            
        });

        entry.save();

        res.redirect(301, '/');
    };


    exports.list = function (req, res) { 
         var query = SelfAssessment.find({}).then(function (results) {
         res.json(results);
    });


    };



   exports.findById = function (req, res) {
    var query = SelfAssessment.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

 

