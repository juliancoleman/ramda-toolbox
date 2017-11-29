const always = require("ramda/src/always");
const either = require("ramda/src/either");
const equals = require("ramda/src/equals");
const ifElse = require("ramda/src/ifElse");

module.exports = ifElse(
  either(equals(null), equals(undefined)),
  always(null),
  String
);
