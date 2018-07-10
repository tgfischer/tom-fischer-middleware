const HttpStatus = require("http-status-codes");
const asyncHandler = require("express-async-handler");

module.exports.body = schema =>
  asyncHandler(async ({ body }, res, next) => {
    try {
      const result = await schema.validate(body);
      res.locals.body = result;
      next();
    } catch (err) {
      next({
        statusCode: HttpStatus.BAD_REQUEST,
        message: "The request was invalid"
      });
    }
  });
