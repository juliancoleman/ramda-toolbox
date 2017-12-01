const compose = require("ramda/src/compose");
const join = require("ramda/src/join");
const map = require("ramda/src/map");
const split = require("ramda/src/split");

const capitalize = require("./capitalize");
const normalize = require("./normalize");

module.exports = compose(
  join(" "),
  map(capitalize),
  split(" "),
  normalize
);
