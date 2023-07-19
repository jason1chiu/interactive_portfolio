const { Schema, model } = require('mongoose');

const aboutSchema = new Schema({
  information: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  interests: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

const About = model('About', aboutSchema);

module.exports = About;