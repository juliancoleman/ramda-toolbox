const compose = require("ramda/src/compose");
const map = require("ramda/src/map");
const split = require("ramda/src/split");

const clean = require("./clean");

module.exports = compose(
  map(clean),
  split("\n")
);
