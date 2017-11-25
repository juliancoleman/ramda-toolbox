const either = require("ramda/src/either");
const equals = require("ramda/src/equals");
const when = require("ramda/src/when");

module.exports = when(
  either(equals("true"), equals("false")),
  equals("true")
);
