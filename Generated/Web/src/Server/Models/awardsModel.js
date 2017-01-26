var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var awardsSchema = new Schema({

    Award50Hours : String, Award100Hours : String, Award200Hours : String, Award50HoursApproved : String, Award100HoursApproved : String, Award200HoursApproved : String, Award50HoursApprovedBy : String, Award100HoursApprovedBy : String, Award200HoursApprovedBy : String, Award50HoursApprovedOn : String, Award100HoursApprovedOn : String, Award200HoursApprovedOn : String, UserId : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('Awards', awardsSchema);
