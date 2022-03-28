let express = require('express');
let bodyParser = require("body-parser");
let middleware = require("./middleware/auth.middleware")
const router = require("./router/routes")
const morgan = require("morgan")
const PORT = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'))
// middleware(app);
router(app);

app.listen(PORT, () => {
  console.log(`Server Started ${PORT}`);
})


