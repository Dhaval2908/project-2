const con = require('../utils/sqlite');

module.exports = function  (app) {
    // require("./user.middleware")(app);
    app.use(function (req, res, next) {
        email = req.body.emailid;
        console.log(email)
        con.query("select * from user where emailid = ? ", [email], function (error, results, fields) {
            //    console.log(results)
            if (results.length > 0) {
                res.json({ "error": "user already exist" })
            }
            else {
                next()
            }
        })
    })
}

