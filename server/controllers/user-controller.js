// import sign token function from auth
const { signToken } = require('../utils/auth');
require('dotenv').config();

module.exports = {
  // login a user, sign a token, and send it back
  async login({ body }, res) {
    if (body.email === process.env.PORTFOLIO_EMAIL && body.password === process.env.PORTFOLIO_PASSWORD) {
      // You can directly pass the email to the signToken function
      const token = signToken({ email: body.email });
      res.json({ token, user: { email: body.email } });
    } else {
      return res.status(400).json({ message: 'Incorrect credentials' });
    }
  }
};
