const curry = require("ramda/src/curry");

module.exports = curry((b, a) => a & b);
