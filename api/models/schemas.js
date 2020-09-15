const Joi = require("joi");

const schemas = {
  user: Joi.object()
    .options({ abortEarly: false })
    .keys({
      fname: Joi.string().min(4).max(50).required(),
      lname: Joi.string().min(4).max(50).required(),
      password: Joi.string().min(4).max(50).required(),
      email: Joi.string().email().min(8).max(50).required(),
    }),
  auth: Joi.object().options({ abortEarly: false }).keys({
    password: Joi.required(),
    email: Joi.required(),
  }),
};
module.exports = schemas;
