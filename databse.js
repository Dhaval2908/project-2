var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('test.db');

db.serialize(()=>{
   
    db.run("SELECT * from user",(err,rows)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            rows.forEach(function (row) { 
                console.log(row)
                });
        }
        
});
})
db.close();
module.exports=db;