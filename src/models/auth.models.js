const db = require('../utils/sqlite');
const uuid = require("uuid");

//add student User
exports.newuser = async function(data,result)
{      
        id=uuid.v4()
        db.all("select * from user where emailid = ? ",[data.emailid],(err,rows)=>{
          console.log(rows.length)
          if (rows.length>0) {
            console.log("fgg")
            error="user already  exist"
            result(error, null);
        }
        else {
          var sql = "INSERT INTO user (emailid,password,id) VALUES (?,?,?);"
          db.run(sql, [data.emailid,data.password,id],(err)=>{
            console.log(err)
            if (err) {
              result(err, null);
          }
          else{
              console.log("1 record inserted");
              result(null, "1 RECORD INSERTED ");
          }
          })
        }
      })
        // con.query(" CREATE TABLE IF NOT EXISTS user (emailid TEXT,password TEXT)");
       
  // con.query(sql, [data.emailid,data.password,id], function (err, r) {
  //   if (err) {
  //       result(err, null);
  //   }
  //   else{
  //       console.log("1 record inserted");
  //       result(null, r);
  //   }
  // });   
}
exports.login = async function(data,result)
{      
  let password=data.password
  db.all("select * from user where emailid = ? ",[data.emailid],(err,rows)=>{
    console.log(rows.length)
    if (rows.length>0) {
      db.get("select * from user where emailid = ? ", [data.emailid],  (err,results)=>{
        if (results) {
         
              if (results.password == password) {
                result(null, results);
                // res.json({message:"SUCCESS LOGIN"})
              }
              else {
                error="PASSWORD DOES NOT MATCH"
                result(error, null);
                //  res.json({"message":"PASSWORD WRONG"})
              }
          
      }
      else {
        error="NO RECORD FOUND"
        result(error, null);
      }
      })
    }
    else {
      error="user does not  exist"
      result(error, null);
    }
})
 
//   con.query("select * from user where emailid = ? ", [data.emailid], function (error, results, fields) {
//     console.log(results)
//     if (results.length > 0) {
//         results.forEach(data => {
//           console.log(data.password)
//             if (data.password == password) {
//               result(null, results);
//               // res.json({message:"SUCCESS LOGIN"})
//             }
//             else {
//               error="PASSWORD DOES NOT MATCH"
//               result(error, null);
//               //  res.json({"message":"PASSWORD WRONG"})
//             }
//         });
//     }
//     else {
//       error="NO RECORD FOUND"
//       result(error, null);
//     }
// })
}


//student login
// module.exports = newUser;



