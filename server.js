var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var ora = require('ora');

var mongoose = require("mongoose");

var port = process.env.PORT || 3000; //port

var express = require('express');
var app = express(); //instant of express

var compiler = webpack(config);
var spinner = ora({
  interval: 100
});


function failAndExit(err) {
  spinner.fail();
  console.error(err.stack);
  process.exit(1);
}

//run morgan for logging
app.use(morgan('combined'));


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// app.use('/css', express.static(__dirname + '/src/css'));

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

//   function saveAccount() {
//     req.user.givenName = req.body.givenName;
//     req.user.surname = req.body.surname;
//     req.user.email = req.body.email;

//     if ('color' in req.body.customData) {
//       req.user.customData.color = req.body.customData.color;
//     }

//     req.user.save(function (err) {
//       if (err) {
//         return writeError(err.userMessage || err.message);
//       }
//       res.end();
//     });
//   }

//   if (req.body.password) {
//     var application = req.app.get('stormpathApplication');

//     application.authenticateAccount({
//       username: req.user.username,
//       password: req.body.existingPassword
//     }, function (err) {
//       if (err) {
//         return writeError('The existing password that you entered was incorrect.');
//       }

//       req.user.password = req.body.password;

//       saveAccount();
//     });
//   } else {
//     saveAccount();
//   }
// });



// spinner.text = 'Starting Dev Server on port ' + port,
// spinner.start();

// app.on('error', failAndExit);
// app.on('stormpath.error', failAndExit);

// app.listen(port, function () {
//   spinner.succeed();
//   spinner.text = 'Initializing Stormpath';
//   spinner.start();
//   app.on('stormpath.ready', function () {
//     spinner.succeed();
//     console.log('\nListening at http://localhost:' + port);
//     // Now bring back error logging.
//     app.get('stormpathLogger').transports.console.level = 'error';
//   });
// });

//mongoDB Configuration
mongoose.connect("mongodb://localhost:iCode");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
////-----------


// Any non API GET routes will be directed to our React App and handled by React Router

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

////------------------------------
app.listen(port, function() {
  console.log('Server running at localhost:' + port)
})







