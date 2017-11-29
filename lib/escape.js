const append = require("ramda/src/append");
const compose = require("ramda/src/compose");
const flip = require("ramda/src/flip");
const join = require("ramda/src/join");
const map = require("ramda/src/map");
const prepend = require("ramda/src/prepend");
const prop = require("ramda/src/prop");
const replace = require("ramda/src/replace");

const coerceString = require("./coerce-string");

const escapeChars = require("../helpers/escape-characters");
const escapeRegex = require("../helpers/escape-regex");

module.exports = compose(
  replace(escapeRegex, map(
    compose(
      join(""),
      append(";"),
      prepend("&"),
      flip(prop)(escapeChars)
    )
  )),
  coerceString
);
