
const controller = require("../controller/auth.controller")
const middleware = require("../middleware/auth.middleware")
module.exports = function (app) {
    app.post("/auth/login",middleware,controller.login)
    app.post("/auth/register",controller.register)
    app.get("/users",) 
    app.put("/user",)
    app.delete("/user",)
    app.post("/user/enable",)
    app.post("/user/disable",)
}