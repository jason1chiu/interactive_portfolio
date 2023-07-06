const router = require('express').Router();
const userRoutes = require('./userRoutes');
const skillRoutes = require('./skillRoutes');
const projectRoutes = require('./projectRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const testimonialRoutes = require('./testimonialRoutes');
const contactMessageRoutes = require('./contactMessageRoutes');

router.use('/users', userRoutes);
router.use('/skills', skillRoutes);
router.use('/projects', projectRoutes);
router.use('/blogposts', blogPostRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/contactmessages', contactMessageRoutes);

module.exports = router;