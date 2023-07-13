const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", "env", "dev.env"),
});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const newsRoute = require("./routes/news.route");
const userRoute = require("./routes/user.route");
const authHandler = require("./middleware/auth.middleware");
const errorHandler = require("./middleware/error.middleware");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/news", authHandler, newsRoute);
app.use("/user", userRoute);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log("app runninng on port", process.env.PORT);
});

module.exports = app;
