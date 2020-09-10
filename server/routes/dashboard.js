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

router.get("/name", auth, async (req, res) => {
  try {
    const user = await pool.query(`SELECT name from users where id = $1`, [
      req.user,
    ]);
    res.json(user.rows[0].name);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("serv error");
  }
});

router.post("/newhabit", auth, async (req, res) => {
  console.log(req.user);
  try {
    const { name, description, latest_date } = req.body;

    const habit = await pool.query(
      "INSERT INTO activities (name, description, streak, latest_date, name_id) VALUES ($1, $2, 0, $3, $4)",
      [name, description, latest_date, req.user]
    );
    res.json(habit);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/", auth, async (req, res) => {
  try {
    const { name } = req.body;

    const remove = await pool.query(
      `DELETE FROM activities WHERE name = $1 and name_id = $2`,
      [name, req.user]
    );
    res.json(remove);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
