const index = `SELECT * from activities where name_id = (SELECT name_id from users where username = $1)`;

module.exports = { index };