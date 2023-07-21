const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");
const { uploadAvatar } = require("../../controllers/about-controller");

const {
  getAbout,
  addAbout,
  updateAbout,
  deleteAbout,
  uploadAvatar,
} = require("../../controllers/about-controller");

// Route to get the About information
router.route("/")
  .get(getAbout)
  .post(authMiddleware, addAbout)
  .post(authMiddleware, uploadAvatar)
  .put(authMiddleware, updateAbout)
  .delete(authMiddleware, deleteAbout);


module.exports = router;
