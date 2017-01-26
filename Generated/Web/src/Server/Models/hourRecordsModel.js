var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hourRecordsSchema = new Schema({

    OldId : Number, DateWorkedFrom : String, DateWorkedTo : String, Hours : String, UserId : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('HourRecord', hourRecordsSchema);
