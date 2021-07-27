const express = require("express");
const mysql = require("mysql");
const db = require("./db/index.js");
// const PORT = process.env.PORT || 5000;
const app = express();
app.set('port',3000);
app.listen(3000, function () {
  console.log("server start");
});

app.get("/", function (req, res) {
  res.send("Hello");
});

app.get("/users", function (req, res) {
  db.connection.query('SELECT * FROM users'),(err,result)=>{ 
    if(err){
      console.log(err);
    }
    res.send(results);
  }
});
