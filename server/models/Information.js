const { Schema, model } = require('mongoose');

const informationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  }
});

const Information = model('Information', informationSchema);

module.exports = Information;
