const compose = require("ramda/src/compose");

const decapitalize = require("./decapitalize");

const sanitizeCamscal = require("../helpers/sanitize-camscal");

module.exports = compose(
  decapitalize,
  sanitizeCamscal
);
