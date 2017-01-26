var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var selfAssessmentsSchema = new Schema({

    OldId : Number, Analysis : String, Description : String, Evaluation : String, FutureLearning : String, UserId : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('SelfAssessment', selfAssessmentsSchema);
