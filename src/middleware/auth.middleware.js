const jwt = require("jsonwebtoken");
const authHandler = (req, res, next) => {
  try {
    if (!req.headers["authorization"])
      res.status(301).send({ message: "token is requried" });

    const decoded = jwt.verify(
      req.headers["authorization"].split(" ")[1],
      process.env.TOKEN_SECRET
    );
    req.user = decoded;
    return next();
  } catch (err) {
    next(err);
  }
};
module.exports = authHandler;
