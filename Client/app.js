/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 7203;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/src/');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public', { maxAge: oneYear }));


app.get('/*', function(req, res) {
    res.render('index.html');
});

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
