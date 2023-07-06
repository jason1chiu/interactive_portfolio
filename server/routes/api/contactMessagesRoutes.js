const router = require('express').Router();
const {
  getContactMessages,
  getSingleContactMessage,
  createContactMessage,
  deleteContactMessage,
} = require('../../controllers/contactMessages-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/')
  .get(authMiddleware, getContactMessages)
  .post(createContactMessage);

router.route('/:id')
  .get(authMiddleware, getSingleContactMessage)
  .delete(authMiddleware, deleteContactMessage);

module.exports = router;