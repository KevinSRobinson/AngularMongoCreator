
    
    var Awards = require('../Models/awardssModel.js');

    exports.create = function (req, res) {
        var entry = new Awards({
            
            Award50Hours: req.body.Award50Hours,Award100Hours: req.body.Award100Hours,Award200Hours: req.body.Award200Hours,Award50HoursApproved: req.body.Award50HoursApproved,Award100HoursApproved: req.body.Award100HoursApproved,Award200HoursApproved: req.body.Award200HoursApproved,Award50HoursApprovedBy: req.body.Award50HoursApprovedBy,Award100HoursApprovedBy: req.body.Award100HoursApprovedBy,Award200HoursApprovedBy: req.body.Award200HoursApprovedBy,Award50HoursApprovedOn: req.body.Award50HoursApprovedOn,Award100HoursApprovedOn: req.body.Award100HoursApprovedOn,Award200HoursApprovedOn: req.body.Award200HoursApprovedOn,UserId: req.body.UserId
          

            
        });

        entry.save();

        res.redirect(301, '/');
    };


    exports.list = function (req, res) { 
         var query = Awards.find({}).then(function (results) {
         res.json(results);
    });


    };



   exports.findById = function (req, res) {
    var query = Awards.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

 

