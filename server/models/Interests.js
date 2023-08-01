const { Schema, model } = require('mongoose');

const interestSchema = new Schema({
  interest: {
    type: String,
    required: true,
  },
});

const Interest = model('Interest', interestSchema);

module.exports = Interest;
