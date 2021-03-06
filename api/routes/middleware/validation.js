const Joi = require("joi");
const middleware = (schema, property) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      var errors = {};
      result.error.details.forEach(function (detail) {
        errors[detail.path[0]] = detail.message.split('"')[2];
      });
      console.log(errors);

      return res
        .status(422)
        .json({ data: req.body, message: "Invalid request", errors: errors });
    } else {
      next();
    }
  };
};
module.exports = middleware;
