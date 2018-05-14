require('dotenv').config();

var express    = require('express');
var app        = express();
// var fifaRouter = require('./config/routes.js');
const models   = require('./models');
const Fifa2018 = models.Fifa2018;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set(fifaRouter);

app.get('/', function(req, res) {
  res.send('This is the backend for my FIFIA 2018 app.');
})

app.get('/api/teams', function(req, res) {
  Fifa2018.find({}, function(err, data) {
    if (err) res.send(err);
    else res.json(data);
  })
})

app.get('/api/africa', function(req, res) {
  Fifa2018.find({region: 'Africa'}, function(err, data) {
    if (err) res.send(err);
    else res.json(data);
  })
})


let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening on port ${ port }`);
});
