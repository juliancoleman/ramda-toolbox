const replace = require("ramda/src/replace");
const toUpper = require("ramda/src/toUpper");

module.exports = replace(/^[a-z]/, toUpper);
