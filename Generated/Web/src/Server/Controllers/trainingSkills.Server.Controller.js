
    
    var TrainingSkill = require('../Models/trainingSkillsModel.js');

    exports.create = function (req, res) {
        var entry = new TrainingSkill({
            
            OldId: req.body.OldId,CourseTitle: req.body.CourseTitle,SkillsLearned: req.body.SkillsLearned,UserId: req.body.UserId
          

            
        });

        entry.save();

        res.redirect(301, '/');
    };


    exports.list = function (req, res) { 
         var query = TrainingSkill.find({}).then(function (results) {
         res.json(results);
    });


    };



   exports.findById = function (req, res) {
    var query = TrainingSkill.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

 

