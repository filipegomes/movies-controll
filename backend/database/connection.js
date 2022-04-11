const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Oskaras13!',
    database: 'movies-controll'
})

module.exports = Connection;
