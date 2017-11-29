const compose = require("ramda/src/compose");
const replace = require("ramda/src/replace");
const trim = require("ramda/src/trim");

module.exports = compose(
  replace(/\t+|\s+/, " "),
  trim
);
