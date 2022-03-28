const db = require('../utils/sqlite');
const jwt = require("jsonwebtoken")


verifyToken = (req, res, next) => {
   
  
    const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
   var token = bearerHeader.split(' ')[1];
   jwt.verify(token,"secretkey",(err,data)=>{
       if(err)
       {
            res.sendStatus(403);
       }
       else
       {
            next();
       }
   })
  } else {
    // Forbidden
    res.json("message: Token not provided");
  }
  
    
  };
// module.exports = function  (app) {
//     // require("./user.middleware")(app);
//     app.use(function (req, res, next) {
     
       
//     })
// }
module.exports = verifyToken;

