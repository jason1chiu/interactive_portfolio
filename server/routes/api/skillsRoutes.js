const router = require('express').Router();

const {
  getSkills,
  getSingleSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} = require('../../controllers/skills-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/')
  .get(getSkills)
  .post(authMiddleware, createSkill);

router.route('/:id')
  .get(getSingleSkill)
  .put(authMiddleware, updateSkill)
  .delete(authMiddleware, deleteSkill);

module.exports = router;