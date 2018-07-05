const asyncHandler = require("express-async-handler");

module.exports.body = schema =>
  asyncHandler(async ({ body }, res, next) => {
    const result = await schema.validate(body);
    res.locals.body = result;
    next();
  });
