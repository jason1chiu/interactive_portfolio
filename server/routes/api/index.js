const router = require('express').Router();
const userRoutes = require('./userRoutes');
const skillRoutes = require('./skillRoutes');
const projectRoutes = require('./projectRoutes');
const contactMessageRoutes = require('./contactMessageRoutes');

router.use('/users', userRoutes);
router.use('/skills', skillRoutes);
router.use('/projects', projectRoutes);
router.use('/contactmessages', contactMessageRoutes);

module.exports = router;