const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const { login } = require("../../controllers/user-controller");

router.route("/login").post(login); // login

module.exports = router;
