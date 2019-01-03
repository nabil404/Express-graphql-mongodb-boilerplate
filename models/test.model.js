var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
  name: {
    type: String,
    required: true
  }
},{timestamps: true});
var Model = mongoose.model('tests', testSchema);
module.exports = Model;
