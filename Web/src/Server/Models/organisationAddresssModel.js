var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organisationAddresssSchema = new Schema({

    Id : Number, Address1 : String, Address2 : String, Postcode : String, Town : String, 
CreatedOn: { type: Date, default: Date.now }} 
);
  



module.exports =  mongoose.model('OrganisationAddress', organisationAddresssSchema);
