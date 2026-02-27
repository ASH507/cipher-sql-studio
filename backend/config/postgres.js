const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => console.log(err));

module.exports = pool;