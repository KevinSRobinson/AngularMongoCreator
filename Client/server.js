/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var errorHandler = require('./routes/utils/errorHandler')();
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 7203;
var routes;

var environment = process.env.NODE_ENV;

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler.init);


console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});
