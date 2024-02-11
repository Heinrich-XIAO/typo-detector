"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => hasGenuineTypos
});
module.exports = __toCommonJS(src_exports);
function hasGenuineTypos(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  const keyboardLayout = [
    "1234567890",
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
  ];
  function getKeyCoords(key) {
    for (let row = 0; row < keyboardLayout.length; row++) {
      const col = keyboardLayout[row].indexOf(key);
      if (col !== -1) {
        return { col, row };
      }
    }
    return null;
  }
  function isClose(coord1, coord2) {
    const rowDiff = Math.abs(coord1.row - coord2.row);
    const colDiff = Math.abs(coord1.col - coord2.col);
    return colDiff <= 1 && rowDiff === 0;
  }
  let amountClose = 0;
  for (let i = 0; i < string1.length; i++) {
    const [coord1, coord2] = [getKeyCoords(string1[i]), getKeyCoords(string2[i])];
    console.log(coord1, coord2);
    if (!coord1 || !coord2 || !isClose(coord1, coord2)) {
      return false;
    } else if (coord1.row - coord2.row !== 0 || coord1.col - coord2.col !== 0) {
      amountClose++;
    }
  }
  console.log(amountClose);
  return amountClose !== 0;
}
