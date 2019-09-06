'use strict';

var express     = require('express');
var bodyParser  = require('body-parser');
var expect      = require('chai').expect;
var cors        = require('cors');
const dotenv = require('dotenv');
dotenv.config();

var apiRoutes         = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var runner            = require('./test-runner');

var app = express();

app.use('/views', express.static(process.cwd() + '/views'));
app.use('/public', express.static(process.cwd() + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('views engine', 'html');
app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Sample front-end


//Index page (static HTML)
app.route('/api/board/:b')
.get(function (req, res) {
  console.log('/api/board/:b');
  res.sendFile(process.cwd() + '/views/board.html');
});

app.route('/')
  .get(function (req, res) {
    console.log('/')
    res.sendFile(process.cwd() + '/views/index.html');
  });

// app.route('/api/board/:b')
//   .post(function (req, res) {
//     console.log("app.route('/api/board/:b')");
//     // res.render(process.cwd() +'/views/board.html');
//     res.sendFile(process.cwd() + '/views/board.html');
//   })



//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API
apiRoutes(app);

//Sample Front-end


//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + process.env.PORT);
  if(process.env.NODE_ENV ==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
        var error = e;
          console.log('Tests are not valid:');
          console.log(error);
      }
    }, 1500);
  }
});

module.exports = app; //for testing
