"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postiveIntegerReg = exports.decimalReg = exports.numberReg = exports.stringReg = exports.nameReg = exports.mobileReg = exports.emailReg = exports.passwordReg = void 0;
const passwordReg = new RegExp(/^.{6,16}$/);
exports.passwordReg = passwordReg;
const emailReg = new RegExp('^([\\w\\.\\+\\-]+\\@[a-zA-Z0-9\\.\\-]+\\.[a-zA-z0-9]{2,4})$');
exports.emailReg = emailReg;
const mobileReg = new RegExp(/^\d{10,10}$/);
exports.mobileReg = mobileReg;
const nameReg = new RegExp('^[a-zA-Z ]+$');
exports.nameReg = nameReg;
const stringReg = new RegExp(/^[a-zA-Z0-9\s,'-]*$/);
exports.stringReg = stringReg;
const numberReg = new RegExp('^[\\d]+$');
exports.numberReg = numberReg;
const decimalReg = new RegExp('^[+-]?([0-9]*[.])?[0-9]+');
exports.decimalReg = decimalReg;
const postiveIntegerReg = new RegExp('^([1-9][0-9]+|[0-9])$');
exports.postiveIntegerReg = postiveIntegerReg;