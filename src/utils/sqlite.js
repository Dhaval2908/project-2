var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '',      // Replace with your database password
  database: 'test' // // Replace with your database Name
}); 
con.connect(function(err) {
  if (err) throw err;

  console.log("connected");
});
module.exports = con;


// const sqlite3 = require('sqlite3')
// let db = new sqlite3.Database('../test.db',(err)=>{
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });
// db.run('CREATE TABLE IF NOT EXISTS user (emailid TEXT,password TEXT)',(err)=>{
//   if (err) {
//     return console.error(err.message);
//   }
// });

// // db.run('INSERT INTO user (emailid,password) VALUES ("ghanshyam@gmail.com","123456789")')

// let sql = `SELECT * FROM user`;

// db.each(sql, (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   // rows.forEach((row) => {
//   //   console.log(row.emailid,row.password);
//   // });
//       console.log(rows.emailid,rows.password);

// });
// db.close();
