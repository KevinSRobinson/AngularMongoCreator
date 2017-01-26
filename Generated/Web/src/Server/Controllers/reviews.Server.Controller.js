
    
    var Review = require('../Models/reviewsModel.js');

    exports.create = function (req, res) {
        var entry = new Review({
            
            OldId: req.body.OldId,Comments: req.body.Comments,AdminComments: req.body.AdminComments,ReviewDate: req.body.ReviewDate,ReviewedBy: req.body.ReviewedBy,ApprovedOn: req.body.ApprovedOn,HoursAchieved: req.body.HoursAchieved,IsApproved: req.body.IsApproved,UserId: req.body.UserId
          

            
        });

        entry.save();

        res.redirect(301, '/');
    };


    exports.list = function (req, res) { 
         var query = Review.find({}).then(function (results) {
         res.json(results);
    });


    };



   exports.findById = function (req, res) {
    var query = Review.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

 

