var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planOfActionsSchema = new Schema({

    OldId : Number, Achieve : String, WhatIDo : String, WhoDoIHelp : String, UserId : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('PlanOfAction', planOfActionsSchema);
