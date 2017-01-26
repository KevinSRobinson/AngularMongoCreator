var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trainingSkillsSchema = new Schema({

    OldId : Number, CourseTitle : String, SkillsLearned : String, UserId : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('TrainingSkill', trainingSkillsSchema);
