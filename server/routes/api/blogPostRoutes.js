const router = require('express').Router();

const {
  getBlogPosts,
  getSingleBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} = require('../../controllers/blogPosts-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/')
  .get(getBlogPosts)
  .post(authMiddleware, createBlogPost);

router.route('/:id')
  .get(getSingleBlogPost)
  .put(authMiddleware, updateBlogPost)
  .delete(authMiddleware, deleteBlogPost);

module.exports = router;