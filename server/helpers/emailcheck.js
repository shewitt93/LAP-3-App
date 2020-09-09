module.exports = (req, res, next) => {
  const { name, email, password } = req.body;

  function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  if (req.path === "/register") {
    if (![name, email, password].every(Boolean)) {
      return res.status(500).json("Missing Credentials");
    } else if (!isEmail(email)) {
      return res.status(401).json("Invalid Email");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!isEmail(email)) {
      return res.status(401).json("Invalid Email");
    }
  }

  next();
};
