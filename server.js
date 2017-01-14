const express = require('express');
const fs = require('fs');

// Bodyparser allows us to use POST requests
var bodyParser = require("body-parser");

// Morgan logs GET/POST requests to the console
var logger = require("morgan");

var mongoose = require("mongoose");
var User = require('./models/User.js');


// Run Morgan for console.logging GET/POST routes
app.use(logger("dev"));

// Run body-parser to parse POST requests to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}



//MONGOOSE
// ===================================================
// MongoDB Configuration 

mongoose.connect("mongodb://localhost/ProjectThree");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// ROUTES
// ===================================================
app.get("/", function(req, res) {

 res.sendFile(__dirname + "client/public/index.html");

});




app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
