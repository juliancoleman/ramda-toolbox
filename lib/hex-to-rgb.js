const fromPairs = require("ramda/src/fromPairs");
const zip = require("ramda/src/zip");

const bRightShift = require("./bitwise-right-shift");
const mask = require("./mask");

const rShift16 = bRightShift(16);
const rShift8 = bRightShift(8);

module.exports = (hex) => {
  const rgb = parseInt(hex, 16);

  return fromPairs(
    zip(
      ["red", "green", "blue"],
      [mask(rShift16(rgb)), mask(rShift8(rgb)), mask(rgb)]
    )
  );
};
