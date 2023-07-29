const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");
const { uploadImage } = require("../../controllers/projects-controller");

const {
  getProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
} = require("../../controllers/projects-controller");

// Route to get all Projects information
router
  .route("/")
  .get(getProjects)
  .post(authMiddleware, addProject);

// Route to handle operations on a single project specified by ID
router
  .route("/:id")
  .get(getProject)
  .put(authMiddleware, updateProject)
  .delete(authMiddleware, deleteProject);

// Separate route for uploading image
router
  .route("/:id/uploadImage")
  .post(authMiddleware, uploadImage);

module.exports = router;
