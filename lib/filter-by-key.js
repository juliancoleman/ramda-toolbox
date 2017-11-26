const curry = require("ramda/src/curry");
const filter = require("ramda/src/filter");
const has = require("ramda/src/has");

module.exports = curry((key, el) => filter(has(key), el));
