// import testimonial model
const { Testimonial } = require('../models');

module.exports = {
  // get all testimonials
  async getTestimonials(req, res) {
    const testimonials = await Testimonial.find({});
    res.json(testimonials);
  },
  // get a single testimonial by id
  async getSingleTestimonial({ params }, res) {
    const testimonial = await Testimonial.findById(params.id);
    if (!testimonial) {
      return res.status(400).json({ message: 'Cannot find a testimonial with this id!' });
    }
    res.json(testimonial);
  },
  // create a new testimonial
  async createTestimonial({ body }, res) {
    const testimonial = await Testimonial.create(body);
    if (!testimonial) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    res.json(testimonial);
  },
  // update a testimonial
  async updateTestimonial({ params, body }, res) {
    const testimonial = await Testimonial.findByIdAndUpdate(params.id, body, { new: true });
    if (!testimonial) {
      return res.status(400).json({ message: 'Cannot find a testimonial with this id!' });
    }
    res.json(testimonial);
  },
  // delete a testimonial
  async deleteTestimonial({ params }, res) {
    const testimonial = await Testimonial.findByIdAndDelete(params.id);
    if (!testimonial) {
      return res.status(400).json({ message: 'Cannot find a testimonial with this id!' });
    }
    res.json(testimonial);
  },
};