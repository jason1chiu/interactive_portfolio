const { Schema, model } = require('mongoose');

const aboutSchema = new Schema({
  information: String,
  education: String,
  interests: String,
  background: String
});

const About = model('About', aboutSchema);

module.exports = About;