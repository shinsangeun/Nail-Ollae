const mysql = require('mysql');
const db_config = require('./config.js');
const conn = db_config.init();
db_config.connect(conn);

let pool = mysql.createPool(db_config);

function getConnection(callback) {
    pool.getConnection(function (err, conn) {
        if(!err){
            callback(conn);
        }
    })
}

module.exports = getConnection;