const always = require("ramda/src/always");
const ifElse = require("ramda/src/ifElse");
const test = require("ramda/src/test");

module.exports = ifElse(
  test(/^(\-|\+)?([0-9]+|Infinity)$/),
  Number,
  always(NaN)
);
