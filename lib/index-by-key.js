const compose = require("ramda/src/compose");
const curry = require("ramda/src/curry");
const indexBy = require("ramda/src/indexBy");
const map = require("ramda/src/map");
const omit = require("ramda/src/omit");
const prop = require("ramda/src/prop");

module.exports = curry((key, arr) => compose(
  map(omit([key])),
  indexBy(prop(key))
)(arr));
