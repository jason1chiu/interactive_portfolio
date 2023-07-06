const { Schema, model } = require('mongoose');

const testimonialSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Testimonial = model('Testimonial', testimonialSchema);

module.exports = Testimonial;