const compose = require("ramda/src/compose");
const cond = require("ramda/src/cond");
const either = require("ramda/src/either");
const identity = require("ramda/src/identity");
const is = require("ramda/src/is");
const equals = require("ramda/src/equals");
const T = require("ramda/src/T");
const toLower = require("ramda/src/toLower");
const when = require("ramda/src/when");

module.exports = cond([
  [either(equals(1), equals(0)), equals(1)],
  [is(String), compose(
    when(
      either(equals("true"), equals("false")),
      equals("true"),
    ),
    toLower,
  )],
  [T, identity]
]);
