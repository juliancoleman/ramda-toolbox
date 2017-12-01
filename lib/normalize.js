const compose = require("ramda/src/compose");
const replace = require("ramda/src/replace");
const toLower = require("ramda/src/toLower");
const toUpper = require("ramda/src/toUpper");

const capitalize = require("./capitalize");
const clean = require("./clean");

const danglers = require("../helpers/dangle-regex");
const sEndPunctionation = require("../helpers/sentence-ending-punctuation");

module.exports = compose(
  replace(danglers, " "),
  replace(sEndPunctionation, toUpper),
  capitalize,
  toLower,
  clean
);
