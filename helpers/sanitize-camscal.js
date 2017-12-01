/**
 * This is the base function for sanitizing / normalizing
 * camelCase and PascalCase.
 *
 */

const __ = require("ramda/src/__"); // eslint-disable-line
const compose = require("ramda/src/compose");
const gt = require("ramda/src/gt");
const isEmpty = require("ramda/src/isEmpty");
const join = require("ramda/src/join");
const map = require("ramda/src/map");
const propSatisfies = require("ramda/src/propSatisfies");
const reject = require("ramda/src/reject");
const split = require("ramda/src/split");
const toLower = require("ramda/src/toLower");
const when = require("ramda/src/when");

const camscal = require("./camscal-regex");

const capitalize = require("../lib/capitalize");
const decapitalize = require("../lib/decapitalize");

module.exports = compose(
  decapitalize,
  join(""),
  when(
    propSatisfies(gt(__, 1), "length"),
    map(compose(capitalize, toLower))
  ),
  reject(isEmpty),
  split(camscal)
);
