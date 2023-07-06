const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/')
  .post(createUser) // register
  .put(authMiddleware, updateUser); // update user

router.route('/login').post(login); // login

router.route('/:id')
  .get(authMiddleware, getSingleUser) // get user by ID
  .delete(authMiddleware, deleteUser); // delete user

module.exports = router;