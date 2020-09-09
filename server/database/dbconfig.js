const { Pool } = require("pg");

const pool = new Pool({ database: "UserData" });

module.exports = pool;
