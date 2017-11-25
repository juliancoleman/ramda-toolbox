const assoc = require("ramda/src/assoc");
const compose = require("ramda/src/compose");
const curry = require("ramda/src/curry");
const map = require("ramda/src/map");
const toPairs = require("ramda/src/toPairs");

module.exports = curry((key1, obj1) => compose(
  map(([key2, obj2]) => assoc(key1, key2, obj2)),
  toPairs
)(obj1));
