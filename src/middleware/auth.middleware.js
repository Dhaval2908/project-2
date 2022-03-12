const db = require('../utils/sqlite');

module.exports = function  (app) {
    // require("./user.middleware")(app);
    app.use(function (req, res, next) {
        if(req.body.emailid == "" || req.body.password== "")
        {
            res.json("message:email or password cant be empty")
        }
        else
            next()
       
    })
}

