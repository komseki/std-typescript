"use strict";
let bool = false;
let decimal = 1;
let hex = 0xffffff;
let binary = 0b01000111;
let octal = 0o107;
let replStr = ': string';
let str = `type${replStr}`;
let numbers = [1, 2, 3];
let numberList = [1, 2, 3];
let floats = [1, 1, 2, 2, 3];
let floatList = floats;
let tuple = ["foo", 3];
var Name;
(function (Name) {
    Name[Name["FOO"] = 3] = "FOO";
    Name[Name["BAR"] = 4] = "BAR";
    Name[Name["FOOBAR"] = 5] = "FOOBAR";
})(Name || (Name = {}));
;
let nm = Name.FOO;
console.log(nm, Name[4]);
let all = 4;
all = 'all-types';
all = true;
let allList = [1, "all", true];
allList[0] = "no error";
function func() {
    console.log('call func');
}
let notDefined = undefined;
let isNull = null;
function error(msg) {
    throw new Error(msg);
}
function fail() {
    return error("failed");
}
function neverLoop() {
    while (true) {
    }
}
let obj = { foo: 'bar' };
let val = "test";
let valLenth = val.length;
valLenth = val.length;
//# sourceMappingURL=types.js.map