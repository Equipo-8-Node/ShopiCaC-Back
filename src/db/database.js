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
});


/*
const pool = mysql.createPool({
    host: 'localhost',
    database: 'shopicac_db',
    user: 'root',
    password: 'Admin1234'
})
*/

module.exports = {
    conn: pool.promise()
};