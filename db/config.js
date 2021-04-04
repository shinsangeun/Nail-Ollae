const mysql = require('mysql');

// local config
/*const db_info = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'ssee',
    database: 'nailOllae',
    connectionLimit: 30
}*/

// heroku config
const db_info = {
    host: 'us-cdbr-east-03.cleardb.com',
    port: '3306',
    user: 'bc06ae6dbc0345',
    password: '00cba21a',
    database: 'heroku_4c235e2ad6c8c27',
    connectionLimit: 30
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function (conn) {
        conn.connect(function (err) {
            if(err){
                console.log('error when connecting to db:', err);
            }
        })
    },
    on: function (err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            return mysql.createConnection(db_info);
        } else {
            throw err;
        }
    }
};