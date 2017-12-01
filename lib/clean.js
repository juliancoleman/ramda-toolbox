const compose = require("ramda/src/compose");
const replace = require("ramda/src/replace");
const trim = require("ramda/src/trim");

const whitespaces = require("../helpers/whitespace-regex");

module.exports = compose(
  replace(whitespaces, " "),
  trim
);
