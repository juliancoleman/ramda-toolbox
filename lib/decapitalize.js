const replace = require("ramda/src/replace");
const toLower = require("ramda/src/toLower");

module.exports = replace(/^[A-Z]/, toLower);

