const curry = require("ramda/src/curry");
const reject = require("ramda/src/reject");
const has = require("ramda/src/has");

module.exports = curry((key, el) => reject(has(key), el));
