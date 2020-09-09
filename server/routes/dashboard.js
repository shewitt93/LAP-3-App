const router = require("express").Router();
const auth = require("../helpers/auth");
const pool = require("../database/dbconfig");

router.get("/", auth, async (req, res) => {
  try {
    const user = await pool.query(
      `SELECT * from activities where name_id = (SELECT id from users where name = $1)`,
      [req.user.name]
    );
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("serv error");
  }
});

module.exports = router;
