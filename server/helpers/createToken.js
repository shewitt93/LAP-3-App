const jwt = require("jsonwebtoken");
require("dotenv").config();

function createToken(user_id) {
  const payload = {
    user: user_id,
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: 600000 });
}
module.exports = createToken;
