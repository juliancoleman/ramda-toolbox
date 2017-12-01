/**
 * This is the base function for sanitizing / normalizing
 * snake_case and kebab-case.
 *
 */

const compose = require("ramda/src/compose");
const map = require("ramda/src/map");
const split = require("ramda/src/split");
const toLower = require("ramda/src/toLower");

const pascalize = require("../lib/pascalize");

const LACapitalLetters = require("./la-capital-letters-regex");

module.exports = compose(
  map(toLower),
  split(LACapitalLetters),
  pascalize
);
