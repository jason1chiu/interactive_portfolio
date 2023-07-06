const { Schema, model } = require('mongoose');

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
});

const Skill = model('Skill', skillSchema);

module.exports = Skill;