const con = require('../utils/sqlite');
const uuid = require("uuid");
const res = require('express/lib/response');

//add student User
exports.newuser = async function(data,result)
{      
        id=uuid.v4()
        con.query(" CREATE TABLE IF NOT EXISTS user (emailid TEXT,password TEXT)");
        var sql = "INSERT INTO user (emailid,password,id) VALUES (?,?,?);"
  con.query(sql, [data.emailid,data.password,id], function (err, r) {
    if (err) {
        result(err, null);
    }
    else{
        console.log("1 record inserted");
        result(null, r);
    }
  });   
}
exports.login = async function(data,result)
{      
  let password=data.password
  con.query("select * from user where emailid = ? ", [data.emailid], function (error, results, fields) {
    console.log(results)
    if (results.length > 0) {
        results.forEach(data => {
          console.log(data.password)
            if (data.password == password) {
              result(null, results);
              // res.json({message:"SUCCESS LOGIN"})
            }
            else {
              error="PASSWORD DOES NOT MATCH"
              result(error, null);
              //  res.json({"message":"PASSWORD WRONG"})
            }
        });
    }
    else {
      error="NO RECORD FOUND"
      result(error, null);
    }
})
}


//student login
// module.exports = newUser;



