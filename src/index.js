const HttpStatus = require("http-status-codes");

module.exports.errorHandler = (err, req, res, next) => {
  console.log(err);
  if (!err) {
    next();
  }

  res.status(err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).json({ err });
};

module.exports.validate = require("./validate");
