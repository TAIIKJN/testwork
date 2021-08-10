const mysql = require('mysql');
var query_command = function query_command(query) {
    const mysqlconfig = {
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        port: "3306",
        password: "",
        database: "testwork",
        timezone: "ict",
        insecureAuth: true
    };

    return new Promise(function(resolve, reject) {
        const con = mysql.createConnection(mysqlconfig);
        con.connect(function(err) {
            con.query(query, function(err, result, fields) {
                if (err) {
                    // console.log(err);
                    resolve(err);

                    // res.send({
                    //     "errorCode": err.code
                    // })
                } else {
                    resolve(result);
                    // res.send(result)
                }
                con.end();
            });
        });
    });
}

module.exports = {
    query_command
};