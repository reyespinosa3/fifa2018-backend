var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const fifa2018Schema = new Schema ({
  region: String,
  country: String,
  appearances: Number,
  titles: Number,
  rank: Number,
  group: String,
  player: String
})

var Fifa2018 = mongoose.model('Fifa2018', fifa2018Schema);

module.exports = Fifa2018;
