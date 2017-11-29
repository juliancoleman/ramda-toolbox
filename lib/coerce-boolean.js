const compose = require("ramda/src/compose");
const either = require("ramda/src/either");
const equals = require("ramda/src/equals");
const toLower = require("ramda/src/toLower");
const when = require("ramda/src/when");

module.exports = compose(
  when(
    either(equals("true"), equals("false")),
    equals("true")
  ),
  toLower
);
