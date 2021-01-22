const mysql = require('mysql');
const db_info = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'ssee',
    database: 'db_name'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function (conn) {
        conn.connect(function (err) {
            if(err) console.error('mysql err:', err);
            else console.log('mysql connected...');
        })
    }
}