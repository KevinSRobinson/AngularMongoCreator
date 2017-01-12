
    
    var HourRecord = require('../Models/hourRecordsModel.js');

    exports.create = function (req, res) {
        var entry = new HourRecord({
            
            OldId: req.body.OldId,DateWorkedFrom: req.body.DateWorkedFrom,DateWorkedTo: req.body.DateWorkedTo,Hours: req.body.Hours,UserId: req.body.UserId
          

            
        });

        entry.save();

        res.redirect(301, '/');
    };


    exports.list = function (req, res) { 
         var query = HourRecord.find({}).then(function (results) {
         res.json(results);
    });


    };



   exports.findById = function (req, res) {
    var query = HourRecord.findById(req.params.id).then(function (results) {
        res.json(results);
    });
};

 

