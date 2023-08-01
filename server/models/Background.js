const { Schema, model } = require('mongoose');

const backgroundSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  startYear: {
    type: Number,
    required: true,
  },
  endYear: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Background = model('Background', backgroundSchema);

module.exports = Background;
