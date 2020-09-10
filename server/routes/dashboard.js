const router = require("express").Router();
const auth = require("../helpers/auth");
const pool = require("../database/dbconfig");

router.get("/", auth, async (req, res) => {
  try {
    const user = await pool.query(
      `SELECT * from activities where name_id = $1`,
      [req.user]
    );
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("serv error");
  }
});

router.post("/newhabit", async (req, res) => {
  try {
    const { name, description, latest_date } = req.body;

    const habit = await pool.query(
      "INSERT INTO activities (name, description, streak, latest_date) VALUES ($1, $2, 0, $3)",
      [name, description, latest_date]
    );
    res.json(habit);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
