const Route = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userData = require("../util/data");
const { registerSchema, loginSchema } = require("../util/bodyValidation");
// @POST User Register
Route.post("/register", async (req, res, next) => {
  try {
    const id = Math.floor(Math.random() * 100);
    const data = await registerSchema.validate({ ...req.body });
    const match = userData.filter(
      (user) => user.username === data.value.username
    );
    if (match.length) {
      return res.status(200).send({ message: "user already exisits" });
    }
    data.value.password = await bcrypt.hash(data.value.password, 10);
    userData.push({ id, ...data.value });
    return res.status(201).send({ data });
  } catch (err) {
    next(err);
  }
});
// @Post Login
Route.post("/login", async (req, res, next) => {
  try {
    const data = await loginSchema.validate({ ...req.body });
    const match = userData.filter(
      (user) => user.username === data.value.username
    );
    const isUserValid = !!match.length;
    if (!isUserValid) {
      return res.status(400).send({
        message: "username not found",
      });
    }
    const encodedata = await bcrypt.compare(
      data.value.password,
      match[0]["password"]
    );
    const token = jwt.sign(JSON.stringify(match[0]), process.env.TOKEN_SECRET);
    if (encodedata) {
      return res.status(200).send({ token });
    }
    return res.status(301).send({ message: "password is invalid" });
  } catch (err) {
    next(err);
  }
});
Route.post("/login", (req, res) => {});
module.exports = Route;
