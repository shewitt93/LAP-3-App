const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({ database: "UserData" });

// const pool = new Pool({
//     database: process.env.DB_DATABASE,
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: process.env.DB_PASSWORD
// })

module.exports = pool;
