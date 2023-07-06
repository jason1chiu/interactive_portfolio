const router = require('express').Router();

const {
  getSingleUser,
  createUser,
  login,
  updateUser,
  deleteUser,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of the user
router.route('/')
  .post(createUser) // sign up
  .put(authMiddleware, updateUser); // update user, protected route

router.route('/login')
  .post(login); // login

router.route('/:id')
  .get(authMiddleware, getSingleUser) // get single user, protected route
  .delete(authMiddleware, deleteUser); // delete user, protected route

module.exports = router;