//DEPENDENCIES
// ===================================================
var path = require('path');
var express = require('express');
var stormpath = require('express-stormpath');
var app = express();

//STORMPATH for authentification
app.use(stormpath.init(app, {web: {produces: ['application/json']}}));

// Bodyparser allows us to use POST requests
var bodyParser = require("body-parser");
// Morgan logs GET/POST requests to the console, whenever we make a GET/POST request in our app
var logger = require("morgan");
var mongoose = require("mongoose");

// var User = require('./models/User.js');


var PORT = process.env.PORT || 3000

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
app.use(logger("dev"));

// Run body-parser to parse POST requests to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


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



//STORMPATH USER DATA PAGE
// ===================================================
app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
  function writeError(message) {
    res.status(400);
    res.json({ message: message, status: 400 });
    res.end();
  }

  function saveAccount () {
    req.user.givenName = req.body.givenName;
    req.user.surname = req.body.surname;
    req.user.email = req.body.email;

    req.user.save(function (err) {
      if (err) {
        return writeError(err.userMessage || err.message);
      }
      res.end();
    });
  }

  if (req.body.password) {
    var application = req.app.get('stormpathApplication');

    application.authenticateAccount({
      username: req.user.username,
      password: req.body.existingPassword
    }, function (err) {
      if (err) {
        return writeError('The existing password that you entered was incorrect.');
      }

      req.user.password = req.body.password;

      saveAccount();
    });
  } else {
    saveAccount();
  }
});
//END OF STORMPATH USER DATA PAGE
// ===================================================







// app.listen(PORT, function(error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//   }
// });

app.on('stormpath.ready', function () {
  app.listen(PORT, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
});
