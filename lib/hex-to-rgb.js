const evolve = require("ramda/src/evolve");

const bAnd = require("./bitwise-and");
const bRightShift = require("./bitwise-right-shift");

const rgbObj = { "red": 0, "blue": 0, "green": 0 };

module.exports = (hex) => {
  const rgb = parseInt(hex, 16);

  return evolve({
    "red": () => bAnd(0xFF, bRightShift(16, rgb)),
    "blue": () => bAnd(0xFF, bRightShift(8, rgb)),
    "green": () => bAnd(0xFF, rgb),
  }, rgbObj);
};
