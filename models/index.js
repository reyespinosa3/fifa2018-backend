var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/soccer');

module.exports.Fifa2018 = require('./fifa2018');
