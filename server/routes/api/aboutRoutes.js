const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  getAbout,
  addAbout,
  updateAbout,
  deleteAbout,
} = require("../../controllers/about-controller");

// Route to get the About information
router.route("/")
  .get(getAbout)
  .post(authMiddleware, addAbout)
  .put(authMiddleware, updateAbout)
  .delete(authMiddleware, deleteAbout);


module.exports = router;
