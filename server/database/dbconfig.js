const { Pool } = require("pg");

const pool = new Pool({ database: 'l3db' });

function run(query, values, callback) {
    return pool.query(query, values, callback)
};

module.exports = { run };