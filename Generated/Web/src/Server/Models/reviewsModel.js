var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewsSchema = new Schema({

    OldId : Number, Comments : String, AdminComments : String, ReviewDate : String, ReviewedBy : String, ApprovedOn : String, HoursAchieved : String, IsApproved : String, UserId : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('Review', reviewsSchema);
