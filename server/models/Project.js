const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
  },
  codeLink: {
    type: String,
  },
  technologies: {
    type: String,
    required: true,
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;