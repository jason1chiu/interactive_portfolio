const router = require('express').Router();

const {
  getProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
} = require('../../controllers/projects-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/')
  .get(getProjects)
  .post(authMiddleware, createProject);

router.route('/:id')
  .get(getSingleProject)
  .put(authMiddleware, updateProject)
  .delete(authMiddleware, deleteProject);

module.exports = router;