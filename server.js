//DEPENDENCIES
// ===================================================
var path = require('path');
var express = require('express');
var app = express();
// Bodyparser allows us to use POST requests
var bodyParser = require("body-parser");
// Morgan logs GET/POST requests to the console, whenever we make a GET/POST request in our app
var logger = require("morgan");
var mongoose = require("mongoose");

// var User = require('./models/User.js');


var PORT = process.env.PORT || 8080

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'public')));



// Run Morgan for console.logging GET/POST routes
// app.use(logger("dev"));

// Run body-parser to parse POST requests to the server
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: "application/vnd.api+json"}));


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




app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html')
});



// ROUTES
// ===================================================
app.get("/Search", function(req, res) {


});



app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
