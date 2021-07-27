const mysql = require("mysql");
// export PASSWORD="password!1" 


// export 변수명 = 값

const password = process.env.PASSWORD;

const host = "localhost";

module.exports = {
  connection: mysql.createConnection({
    host: host,
    user: "root",
    password: "password!1",
    database: "user",
  }),
};
