require("dotenv").config();
const cors = require('cors');
const express = require("express");
const app = express();
const routes = require("./src/routes/");
const errorHandler = require('./src/middleware/handlerError')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", function (_req, res) {
  res.send({
    name: "test IziMedia",
    environment: process.env.NODE_ENV,
  });
});

app.use("/api", routes);
app.use(errorHandler); 

if (!module.parent) {
  const server = app.listen(process.env.PORT, "0.0.0.0", function () {
    const port = server.address().port;
    console.log("Example app listening at http://localhost:%s", port);
  });
}

module.exports = app;
