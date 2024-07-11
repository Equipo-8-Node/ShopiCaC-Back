const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'sql10.freesqldatabase.com',
  database: 'sql10717838',
  user: 'sql10717838',
  password: 'VETpHxkiSi',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = {
  conn: pool.promise()
}