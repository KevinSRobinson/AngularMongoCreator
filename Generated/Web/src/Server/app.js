








 
 


/*jshint node:true*/
'use strict';

var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors');
var errorHandler = require('./routes/utils/errorHandler')();
var config = require('../../gulp.config')();
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || config.port;
var routes;

var environment = process.env.NODE_ENV;

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(errorHandler.init);

//Mongoose 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contacts');



console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);


app.use('/api/contacts', require('./Apis/contactsApi'));
app.use('/api/awards', require('./Apis/awardsApi'));
app.use('/api/hourRecords', require('./Apis/hourRecordsApi'));
app.use('/api/opportunitys', require('./Apis/opportunitysApi'));
app.use('/api/planOfActions', require('./Apis/planOfActionsApi'));
app.use('/api/reviews', require('./Apis/reviewsApi'));
app.use('/api/selfAssessments', require('./Apis/selfAssessmentsApi'));
app.use('/api/trainingSkills', require('./Apis/trainingSkillsApi'));
app.use('/api/whereIVolunteers', require('./Apis/whereIVolunteersApi'));
app.use('/api/organisations', require('./Apis/organisationsApi'));
app.use('/api/organisationAddress', require('./Apis/organisationAddressApi'));

//app.use('/api', router);

 app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        app.use('/', express.static('./src/client/index.html'));



 
app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});






