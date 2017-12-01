const compose = require("ramda/src/compose");

const capitalize = require("./capitalize");

const sanitizeCamscal = require("../helpers/sanitize-camscal");

module.exports = compose(
  capitalize,
  sanitizeCamscal
);
