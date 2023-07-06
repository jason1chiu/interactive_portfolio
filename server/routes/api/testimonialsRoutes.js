const router = require('express').Router();

const {
  getTestimonials,
  getSingleTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require('../../controllers/testimonials-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/')
  .get(getTestimonials)
  .post(authMiddleware, createTestimonial);

router.route('/:id')
  .get(getSingleTestimonial)
  .put(authMiddleware, updateTestimonial)
  .delete(authMiddleware, deleteTestimonial);

module.exports = router;