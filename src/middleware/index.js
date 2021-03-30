const createError = require('http-errors');

module.exports.logHandler = (req, res, next) => {
    console.log(req.originalUrl)
    next();
};

module.exports.error404Handler = (req, res, next) => {
    next(createError(404));
};

module.exports.errorHandler = (err, req, res, _next) => {
    res.status(err.status || 500);
    res.send({ message: err.message });
};
