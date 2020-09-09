const express = require("express");
const app = express();
const cors = require("cors");
const { addListener } = require("./database/dbconfig");

const port = process.env.PORT || 3000;

// // Middleware
app.use(cors());
app.use(express.json());
// // Parses details from a form
//Routes
app.use("/users", require("./routes/users"));

app.use("/dashboard", require("./routes/dashboard"));
//port listen

app.get("/", (req, res) => {
  res.send("Express server running");
});
app.listen(port, () =>
  console.log(`App listening on http://localhost:${port}/`)
);
