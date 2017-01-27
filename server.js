//dependencies
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var ora = require('ora');

//express
var express = require('express');
var app = express();

//webpack
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

//mongoose/mongo
var mongoose = require('mongoose');
//models
var User = require('./src/models/User.js');
//controller
var users = require('./src/controllers/userController');
var Promise = require("bluebird");
mongoose.Promise = Promise;

//setup handlebars

var exphbs = require('express-handlebars');

var hbs = exphbs.create({
    defaultLayout: 'index',
    helpers: {
      section: function(name, options) {
        if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      }
    }
  });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//listening port
var port = process.env.PORT || 3000;


//terminal spinner
var spinner = ora({
  interval: 100
});

function failAndExit(err) {
  spinner.fail();
  console.error(err.stack);
  process.exit(1);
}

// Database configuration with mongoose
mongoose.connect('mongodb://localhost:iCODE');
var db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});


app.use(morgan('combined'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/css', express.static(__dirname + '/src/css'));

// app.use(stormpath.init(app, {
//   // Disable logging until startup, so that we can catch errors
//   // and display them nicely.
//   debug: 'none',
//   web: {
//     produces: ['application/json'],
//     me: {
//       expand: {
//         customData: true
//       }
//     },
//     register: {
//       form: {
//         fields: {
//           color: {
//             enabled: true,
//             label: 'Color',
//             placeholder: 'E.g. blue',
//             type: 'text'
//           }
//         }
//       }
//     }
//   }
// }));

// app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
//   function writeError(message) {
//     res.status(400);
//     res.json({ message: message, status: 400 });
//     res.end();
//   }

//Save account to Stormpath
  function saveAccount() {
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




//logging in
  if (req.body.password) {
    var application = req.app.get('stormpathApplication');

    application.authenticateAccount({
      username: req.user.username,
      password: req.body.existingPassword,
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

//after user submits info on registration page
app.post('/register', function(req, res){
    //hash user's password after registration
    var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    //define a user
    var user = new User({
        givenName: req.body.givenName,
        surname: req.body.surname,
        email: req.body.email,
        password: hash,//store result of hashing + salting user's password
    });
    //save that user to the Db
    user.save(function(err){
        if(err){
            var err = "Error saving user";
            if(err.code === 11000){
            //11000 is code mongoDB throws if not unique e.g. user's email
                var error = "Email already registered. Please try again."
            }
            res.render('register.jade', { error: error });
        } else {
            //redirect back to login after registration
            res.redirect('/login');
        }
    });
    
    //res.json(req.body);
    //send back json obj of the submit body
});



app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

spinner.text = 'Starting Dev Server on port ' + port,
spinner.start();

app.on('error', failAndExit);
app.on('stormpath.error', failAndExit);



app.listen(port, function () {
  spinner.succeed();
  spinner.text = 'Initializing Stormpath';
  spinner.start();
  app.on('stormpath.ready', function () {
    spinner.succeed();
    console.log('\nListening at http://localhost:' + port);
    // Now bring back error logging.
    app.get('stormpathLogger').transports.console.level = 'error';
  });
});



// app.listen(port, function() {
//   console.log('Server running at localhost:' + port)
// })







