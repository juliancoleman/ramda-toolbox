const apply = require("ramda/src/apply");
const juxt = require("ramda/src/juxt");

module.exports = apply(juxt([Math.min, Math.max]));
