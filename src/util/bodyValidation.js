const joi = require("joi");
const registerSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  email: joi.string().email().min(3).max(30).required(),
  password: joi.string().min(3).max(30).required(),
  username: joi.string().min(3).max(30).required(),
});
const loginSchema = joi.object({
  username: joi.string().min(3).max(30).required(),
  password: joi.string().min(3).max(30).required(),
});
module.exports = { registerSchema, loginSchema };
