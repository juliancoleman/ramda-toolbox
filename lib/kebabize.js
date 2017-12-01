const compose = require("ramda/src/compose");
const join = require("ramda/src/join");

const sanitizeSnabab = require("../helpers/sanitize-snabab");

module.exports = compose(
  join("-"),
  sanitizeSnabab
);
