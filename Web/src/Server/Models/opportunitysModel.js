var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var opportunitysSchema = new Schema({

    OldId : Number, CourseTitle : String, SkillsLearned : String, Comments : String, Date : String, UserId : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('Opportunity', opportunitysSchema);
