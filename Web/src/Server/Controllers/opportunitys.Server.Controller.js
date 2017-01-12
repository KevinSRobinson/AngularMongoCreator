
    
    var Opportunity = require('../Models/opportunitysModel.js');

    exports.create = function (req, res) {
        var entry = new Opportunity({
            
            OldId: req.body.OldId,CourseTitle: req.body.CourseTitle,SkillsLearned: req.body.SkillsLearned,Comments: req.body.Comments,Date: req.body.Date,UserId: req.body.UserId
          

            
        });

        entry.save();

        res.redirect(301, '/');
    };


    exports.list = function (req, res) { 
         var query = Opportunity.find({}).then(function (results) {
         res.json(results);
    });


    };



   exports.findById = function (req, res) {
    var query = Opportunity.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

 

