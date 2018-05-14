
const express    = require('express');
const app        = express.Router();
const bodyParser = require('body-parser');
const models     = require('../models');
const Fifa2018   = models.Fifa2018;

app.get('/', function(req, res) {
  res.send('This is the backend for my FIFIA 2018 app.');
})

app.get('/api/teams', function(req, res) {
  Fifa2018.find({}, function(err, data) {
    if (err) res.send(err);
    else res.json(data);
  })
})
