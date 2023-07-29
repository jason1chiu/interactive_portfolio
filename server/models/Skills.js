const { Schema, model } = require('mongoose');

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  iconClassName: {
    type: String,
    required: true,
  },
});

const Skill = model('Skill', skillSchema);

module.exports = Skill;
