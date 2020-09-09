const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(500).json("Please Register before accessing this");
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    req.user = payload.user;
    next();
  } catch (err) {
    return res.status(500).json("Please Register befre accessing this");
  }
};
