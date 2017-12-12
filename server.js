
// Dependencies
var express = require('express');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
// mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/api', function(request, response){
    response.send('working');
});

// Start server
app.listen(8080);
console.log('API is running on port 8080');
