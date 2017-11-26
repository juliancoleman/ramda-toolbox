const __ = require("ramda/src/__"); // eslint-disable-line
const compose = require("ramda/src/compose");
const curry = require("ramda/src/curry");
const join = require("ramda/src/join");
const lte = require("ramda/src/lte");
const map = require("ramda/src/map");
const propSatisfies = require("ramda/src/propSatisfies");
const reverse = require("ramda/src/reverse");
const when = require("ramda/src/when");

const btoi = require("./map-bool-to-int");

const parseIntCurried = curry(parseInt);

module.exports = when(
  propSatisfies(lte(__, 32), "length"),
  compose(parseIntCurried(__, 2), join(""), reverse, map(btoi))
);
