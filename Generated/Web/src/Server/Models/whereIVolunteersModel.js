var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var whereIVolunteersSchema = new Schema({

    OldId : Number, Name : String, Organisation : String, Details : String, Address1 : String, Address2 : String, Town : String, Postcode : String, Email : String, Tel : String, MyOrganisation : String, WhatMyOrganisationDoes : String, Agreement : String, UserId : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('WhereIVolunteer', whereIVolunteersSchema);
